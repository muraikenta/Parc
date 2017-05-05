import React from 'react'
import UserInfo from '../components/user_info'

class UserPage extends React.PureComponent {
  onFollowClick(e) {
    e.preventDefault()
    this.props.follow()
  }

  onUnfollowClick(e) {
    e.preventDefault()
    this.props.unfollow()
  }

  render() {
    return (
      <div>
        <div>
          {this.props.userInfo.following ? (
            <a href='#' onClick={this.onUnfollowClick.bind(this)} >Unfollow</a>
          ) : (
            <a href='#' onClick={this.onFollowClick.bind(this)} >Follow</a>
          )}
        </div>
        <UserInfo
          {...this.props.userInfo}
        />
      </div>
    )
  }
}
export default UserPage
