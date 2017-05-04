import React from 'react'
import UserInfo from '../components/user_info'

class MyPage extends React.PureComponent {
  render() {

    return(
      <div>
        <UserInfo
          {...this.props.userInfo}
        />
      </div>
    )
  }
}
export default MyPage
