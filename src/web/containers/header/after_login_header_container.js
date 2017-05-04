import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {createPost} from '../../../actions/post'
import {
  closePostFormModal,
  openPostFormModal,
  updatePostFormValue,
} from '../../../actions/post_form_modal'
import {signOut} from '../../../actions/session'
import PostFormModal from '../../components/post_form_modal'

const styles = {
  nav: {
    borderBottom: '1px solid gray',
    height: 45,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  postIcon: {
    height: '80%',
    cursor: 'pointer',
    marginLeft: 15,
  }
}

const mapStateToProps = (state) => ({
  me: state.session.me,
  authData: state.session.authData,
  isPostFormModalOpen: state.postForm.isModalOpen,
  postFormValue: state.postForm.value,
  error: state.postForm.error,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {dispatch} = dispatchProps
  return {
    ...stateProps,
    ...dispatchProps,
    signOut: () => {
      dispatch(signOut(stateProps.authData, () => { ownProps.history.push('/') }))
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
          <h1 style={styles.logo}>Parc</h1>
          <img src='/images/mypage_icon.png' style={styles.postIcon} />
          <div>{me.name}</div>
          <img
            src='/images/post_icon.png'
            style={styles.postIcon}
            onClick={() => { this.props.dispatch(openPostFormModal()) }}
          />
          <div onClick={() => { this.props.signOut() }}>ログアウト</div>
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

export default withRouter(connect(mapStateToProps, null, mergeProps)(AfterLoginHeader))
