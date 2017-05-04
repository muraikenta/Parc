import React from 'react'
import UserInfo from '../components/user_info'

class MyPage extends React.PureComponent {
  render() {
    // サンプルユーザー
    const sampleUser = {id: 1, name: 'にんじゃわんこ', image: ''}

    return (
      <div>
        <UserInfo
          {...sampleUser}
        />
      </div>
    )
  }
}
export default MyPage
