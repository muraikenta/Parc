import React from 'react'
import {connect} from 'react-redux'
import {ModalTypes} from '../../constants/app'
import {openModal, closeModal} from '../../actions/modal'
import {signup, signin} from '../../actions/session'
import UserModal from '../components/user_modal'

const mapStateToProps = (state) => ({
  isModalOpen: state.modal.isModalOpen,
  identifier: state.modal.identifier,
})

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (identifier) => {
      dispatch(openModal(identifier))
    },
    closeModal: (identifier) => {
      dispatch(closeModal(identifier))
    },
    signin: (email, password) => {
      dispatch(signin({email, password}))
    }
  }
}

class Landing extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>エンジニアが集まる場所</h2>
        <button
          type='button'
          onClick={() => this.props.openModal(ModalTypes.SIGN_UP)}
        >
          アカウント作成
        </button>
        <UserModal
          isModalOpen={this.props.isModalOpen}
          identifier={this.props.identifier}
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
          signup={this.props.signup}
          signin={this.props.signin}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
