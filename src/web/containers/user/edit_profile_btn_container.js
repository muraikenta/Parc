import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {updateProfile} from '../../../actions/user'
import EditProfileModal from '../../components/user/edit_profile_modal'

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateProfile: (profile) => {
    const id = ownProps.userId
    dispatch(updateProfile({id, profile}))
  },
})

class EditProfileBtnContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState() {
    return {isModalOpen: false}
  }

  openModal() {
    this.setState({isModalOpen: true})
  }

  closeModal() {
    this.setState({isModalOpen: false})
  }

  submitProfile(value) {
    this.props.updateProfile(value)
    // TODO: close modal only when update success
    this.setState({isModalOpen: false})
  }

  render() {
    const {isModalOpen} = this.state
    return (
      <div>
        <RaisedButton
          label='プロフィールを編集'
          onClick={this.openModal.bind(this)}
        />
        <EditProfileModal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal.bind(this)}
          onSubmit={this.submitProfile.bind(this)}
        />
      </div>

    )
  }
}

export default connect(null, mapDispatchToProps)(EditProfileBtnContainer)
