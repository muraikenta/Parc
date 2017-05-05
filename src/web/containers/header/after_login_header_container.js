import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Avatar from 'material-ui/Avatar'
import Dropdown, {DropdownTrigger, DropdownContent} from '../../components/dropdown'
import PostFormModal from '../../components/post_form_modal'
import {createPost} from '../../../actions/post'
import {
  closePostFormModal,
  openPostFormModal,
  updatePostFormValue,
} from '../../../actions/post_form_modal'
import {signOut} from '../../../actions/session'

const styles = {
  nav: {
    borderBottom: '1px solid gray',
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
    margin: 0,
    marginRight: 'auto',
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
                <Avatar
                  src='/images/mypage_icon.png'
                  size={35}
                  style={styles.avatar}
                />
                <span style={styles.userName}>{me.name}</span>
              </DropdownTrigger>
              <DropdownContent style={styles.dropdownContent}>
                <div><Link to='/mypage'>マイページ</Link></div>
                <div onClick={() => { this.props.signOut() }}>ログアウト</div>
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

export default connect(mapStateToProps, null, mergeProps)(AfterLoginHeader)
