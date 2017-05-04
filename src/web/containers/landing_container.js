import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {openSignupModal, openLoginModal, closeModal} from '../../actions/modal'
import {signup, signin} from '../../actions/session'
import UserModal from '../components/user_modal'

const mapStateToProps = (state) => ({
  isModalOpen: state.modal.isModalOpen,
  displayModalType: state.modal.displayModalType,
})

const mapDispatchToProps = (dispatch, history) => {
  return {
    openSignupModal: () => {
      dispatch(openSignupModal())
    },
    openLoginModal: () => {
      dispatch(openLoginModal())
    },
    closeModal: () => {
      dispatch(closeModal())
    },
    signup: (name, email, password) => {
      dispatch(signup({name, email, password}, () => { history.push('/timeline') }))
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
          onClick={() => this.props.openSignupModal()}
        >
          アカウント作成
        </button>
        <UserModal
          isModalOpen={this.props.isModalOpen}
          displayModalType={this.props.displayModalType}
          openSignupModal={this.props.openSignupModal}
          openLoginModal={this.props.openLoginModal}
          closeModal={this.props.closeModal}
          signup={this.props.signup}
          signin={this.props.signin}
        />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Landing))
