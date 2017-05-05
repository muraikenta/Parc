import React from 'react'
import UserInfo from '../components/user_info'

class UserPage extends React.PureComponent {
  // Add follow or unfollow button
  render() {
    return (
      <div>
        <UserInfo
          {...this.props.userInfo}
        />
      </div>
    )
  }
}
export default UserPage
