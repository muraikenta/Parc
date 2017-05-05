import React from 'react'
import UserInfo from '../components/user_info'
import EditProfileFormModal from '../components/edit_profile_form_modal'
import {updateProfile} from '../../actions/user_info'

class MyPage extends React.PureComponent {
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

  submitProfile(profile) {
    const {dispatch} = this.props
    dispatch(updateProfile({profile}))
    this.setState({isEditProfileFormModalOpen: false})
  }

  render() {
    return (
      <div>
        <UserInfo
          {...this.props.userInfo}
        />
        <span onClick={this.openEditProfileFormModal.bind(this)}>プロフィール編集</span>
        <EditProfileFormModal
          isOpen={this.state.isEditProfileFormModalOpen}
          onRequestClose={this.closeEditProfileFormModal.bind(this)}
          submitProfile={this.submitProfile.bind(this)}
        />
      </div>
    )
  }
}
export default MyPage
