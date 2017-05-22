import React from 'react'
import {connect} from 'react-redux'

import {
  fetchUser,
  follow,
  unfollow,
} from '../../../actions/user'

import UserIcon from '../../components/user_icon'
import UserInfo from '../../components/user/user_info'
import EditProfileBtn from './edit_profile_btn_container'
import FollowBtn from './follow_btn_container'

const mapStateToProps = (state, ownProps) => {
  const {user, session: {me}} = state
  return {
    username: ownProps.match.params.username,
    user: user.data,
    isMe: user.data.username == me.username,
    error: state.user.error,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: (username) => { dispatch(fetchUser(username)) },
})

class UserContainer extends React.PureComponent {
  componentWillMount() {
    this.props.fetchUser(this.props.username)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.username !== nextProps.username) {
      this.props.fetchUser(nextProps.username)
    }
  }

  render() {
    const {
      user,
      isMe,
      error,
      follow,
      unfollow,
    } = this.props

    const displayContent = (() => {
      if (error) {
        return (
          <p>User Not Found</p>
        )
      }
      return (
        <div style={styles.wrapper}>
          <UserIcon src={user.image} size={200} />
          <UserInfo user={user} />
          {user.id && isMe ? (
            <EditProfileBtn userId={user.id} />
          ) : (
            <FollowBtn user={user} />
          )}
        </div>
      )
    })()

    return (
      <div style={styles.wrapper}>
        {displayContent}
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
