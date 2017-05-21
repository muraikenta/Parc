import React from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'
import {Link} from 'react-router-dom'
import {createPost} from '../../../actions/post'
import {
  closePostFormModal,
  openPostFormModal,
  updatePostFormValue,
} from '../../../actions/post_form_modal'
import {signOut} from '../../../actions/session'
import Dropdown, {DropdownTrigger, DropdownContent} from '../../components/dropdown'
import PostFormModal from '../../components/post_form_modal'
import UserIcon from '../../components/user_icon'

const RadiumLink = Radium(Link)

const mapStateToProps = (state) => ({
  me: state.session.me,
  authData: state.session.authData,
  isPostFormModalOpen: state.postForm.isModalOpen,
  postFormValue: state.postForm.value,
  error: state.postForm.error,
})

const mergeProps = (stateProps, dispatchProps) => {
  const {dispatch} = dispatchProps
  return {
    ...stateProps,
    ...dispatchProps,
    signOut: () => {
      dispatch(signOut(stateProps.authData))
    },
  }
}

@Radium
class AfterLoginHeader extends React.PureComponent {
  submitPost() {
    const {dispatch, postFormValue} = this.props
    dispatch(createPost({content: postFormValue}))
  }

  render() {
    const {me} = this.props
    return (
      <div>
        <nav style={styles.nav}>
          <h1 style={styles.logo}>
            <Link to='/' style={styles.logoLink}>Parc</Link>
          </h1>
          <div style={styles.menus}>
            <Dropdown style={styles.menu}>
              <DropdownTrigger>
                <UserIcon src={me.image} style={styles.userIcon} />
                <span style={styles.userName}>{me.name}</span>
              </DropdownTrigger>
              <DropdownContent style={styles.dropdownContent}>
                <RadiumLink to={`/users/${me.username}`}>マイページ</RadiumLink>
                <a onClick={() => { this.props.signOut() }}>ログアウト</a>
              </DropdownContent>
            </Dropdown>
          <img
            src='/images/post_icon.png'
            style={{...styles.menu, ...styles.postIcon}}
            onClick={() => { this.props.dispatch(openPostFormModal()) }}
          />

          </div>
        </nav>
        <PostFormModal
          postFormValue={this.props.postFormValue}
          onPostFormChange={(value) => { this.props.dispatch(updatePostFormValue(value)) }}
          isOpen={this.props.isPostFormModalOpen}
          onRequestClose={() => { this.props.dispatch(closePostFormModal()) }}
          submitPost={this.submitPost.bind(this)}
        />
      </div>
    )
  }
}

const styles = {
  nav: {
    borderBottom: '1px solid rgba(128, 128, 128, 0.19)',
    height: 45,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  logo: {
    margin: '0 auto 0 0',
  },
  logoLink: {
    display: 'block',
    lineHeight: '50px',
    padding: '0 14px',
  },
  menus: {
    display: 'flex',
  },
  menu: {
    padding: '0 14px',
    cursor: 'pointer',
  },
  userIcon: {
    width: 35,
    height: 35,
  },
  userName: {
    display: 'inline-block',
    lineHeight: '50px',
    padding: '0 10px',
  },
  dropdownContent: {
    top: 50,
    lineHeight: '16px',
  },
  postIcon: {
    height: 30,
    marginTop: 8,
  },
  avatar: {
    verticalAlign: 'middle',
    marginTop: -4,
  },
  userName: {
    display: 'inline-block',
    lineHeight: '50px',
    padding: '0 10px',
  },
  dropdownContent: {
    top: 50,
    lineHeight: '16px',
  },
  postIcon: {
    height: 30,
    marginTop: 8,
  },
}

export default connect(mapStateToProps, null, mergeProps)(AfterLoginHeader)
