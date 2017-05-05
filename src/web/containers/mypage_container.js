import {connect} from 'react-redux'
import MyPage from '../components/mypage'

const mapStateToProps = (state) => ({
  userInfo: state.session.me,
})

export default connect(mapStateToProps)(MyPage)
