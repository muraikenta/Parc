import React from 'react'
import {connect} from 'react-redux'
import MyPage from '../components/mypage'
import {fetchUserInfo} from '../../actions/user_info'

const mapStateToProps = (state) => ({
  userInfo: state.userInfo.item,
  isFetching: state.userInfo.isFetching,
  error: state.userInfo.error,
})

class MyPageContainer extends React.PureComponent {
  componentWillMount() {
    const {dispatch} = this.props
    dispatch(fetchUserInfo(1))
  }

  render() {
    const {
      userInfo,
      isFetching,
      error,
    } = this.props

    return (
      <div>
        <MyPage userInfo={userInfo} />
      </div>
    )
  }
}
export default connect(mapStateToProps)(MyPageContainer)
