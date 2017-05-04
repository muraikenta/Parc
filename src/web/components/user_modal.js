import React from 'react'
import Modal from 'react-modal'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MaterialBaseTheme from '../../lib/styles/material-base-theme'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {UserModalTypes} from '../../constants/app'

const styles = {
  modal: {
    content : {
      position: 'absolute',
      top: '20%',
      left: '35%',
      right: '35%',
      bottom: '40%',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
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

  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(MaterialBaseTheme),
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
      signup,
      signin,
    } = this.props

    const displayModal = (() => {
      switch (identifier) {
        case UserModalTypes.SIGNUP:
          return (
            <div>
              <TextField
                hintText='ユーザー名'
                ref='name'
                onChange={this.handleChangeName.bind(this)}
              />
              <br />
              <TextField
                hintText='メールアドレス'
                ref='email'
                onChange={this.handleChangeEmail.bind(this)}
              />
              <br />
              <TextField
                hintText='パスワード'
                type="password"
                ref='password'
                onChange={this.handleChangePassword.bind(this)}
              />
              <br />
              <RaisedButton
                label="新規登録"
                onClick={() => signup(this.state.name, this.state.email, this.state.password)}
              />
              <br />
              <span
                onClick={() => openModal(UserModalTypes.LOGIN)}
              >
                <span style={{color: 'blue', cursor: 'pointer'}}>ログイン</span>はこちら
              </span>
            </div>
          )
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
