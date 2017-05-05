import React from 'react'
import Modal from 'react-modal'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {UserModalTypes} from '../../constants/app'
import SignUpForm from '../containers/sign_up_form_container'

const styles = {
  modal: {
    content : {
      position: 'absolute',
      top: '20%',
      padding: '20px',
      margin: '0 auto',
      width: 350,
      border: '1px solid #ccc',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
    }
  },
}

class UserModal extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleChangeName() {
    const name = this.refs.name.getValue()
    this.setState({name})
  }

  handleChangeEmail() {
    const email = this.refs.email.getValue()
    this.setState({email})
  }

  handleChangePassword() {
    const password = this.refs.password.getValue()
    this.setState({password})
  }

  render() {
    const {
      isModalOpen,
      identifier,
      openModal,
      closeModal,
      signin,
    } = this.props

    const displayModal = (() => {
      switch (identifier) {
        case UserModalTypes.SIGNUP:
          return <SignUpForm />
        case UserModalTypes.LOGIN:
          return (
            <div>
              <TextField
                hintText='メールアドレス'
                ref='email'
                onChange={this.handleChangeEmail.bind(this)}
              />
              <br />
              <TextField
                hintText='パスワード'
                type='password'
                ref='password'
                onChange={this.handleChangePassword.bind(this)}
              />
              <br />
              <RaisedButton
                label='ログイン'
                onClick={() => signin(this.state.email, this.state.password)}
              />
              <br />
              <span
                onClick={() => openModal(UserModalTypes.SIGNUP)}
              >
                <span style={{color: 'blue', cursor: 'pointer'}}>新規登録</span>はこちら
              </span>
            </div>
          )
      }
    })()

    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal(identifier)}
        contentLabel='modal'
        style={styles.modal}
      >
        {displayModal}
      </Modal>
    )
  }
}

export default UserModal
