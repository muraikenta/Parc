import React from 'react'
import {connect} from 'react-redux'
import MyPage from '../components/mypage'

class MyPageContainer extends React.PureComponent {
  render() {
    return (
      <MyPage />
    )
  }
}
export default connect()(MyPageContainer)
