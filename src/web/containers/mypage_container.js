import React from 'react'
import {connect} from 'react-redux'
import MyPage from '../components/mypage'
import EditProfileFormModal from '../components/edit_profile_form_modal'
import {fetchUserInfo} from '../../actions/user_info'

const mapStateToProps = (state) => ({
  userInfo: state.userInfo.data,
  isFetching: state.userInfo.isFetching,
  error: state.userInfo.error,
})

class MyPageContainer extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      isEditProfileFormModalOpen: false,
    }
  }

  openEditProfileFormModal() {
    if (this.state.isEditProfileFormModalOpen) return
    this.setState({isEditProfileFormModalOpen: true})
  }

  closeEditProfileFormModal() {
    if (!this.state.isEditProfileFormModalOpen) return
    this.setState({isEditProfileFormModalOpen: false})
  }

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
        <span onClick={this.openEditProfileFormModal.bind(this)}>プロフィール編集</span>
        <EditProfileFormModal
          isOpen={this.state.isEditProfileFormModalOpen}
          onRequestClose={this.closeEditProfileFormModal.bind(this)}
        />
      </div>
    )
  }
}
export default connect(mapStateToProps)(MyPageContainer)
