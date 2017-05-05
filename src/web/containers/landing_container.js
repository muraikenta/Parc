import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Modal from 'react-modal'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {signup} from '../../actions/session'

const styles = {
  modal: {
    content: {
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
      padding: '20px',
    },
  },
}

class Landing extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      name: '',
      email: '',
      password: '',
    }
  }

  openModal() {
    this.setState({isModalOpen: true})
  }

  closeModal() {
    this.setState({isModalOpen: false})
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

  handleSubmit() {
    const {dispatch, history} = this.props
    const {name, email, password} = this.state
    dispatch(signup({name, email, password}, () => { history.push('/timeline') }))
  }

  render() {
    return (
      <div>
        <h2>エンジニアが集まる場所</h2>
        <button
          type='button'
          onClick={this.openModal.bind(this)}
        >
          アカウント作成
        </button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel='modal'
          style={styles.modal}
        >
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
            type='password'
            ref='password'
            onChange={this.handleChangePassword.bind(this)}
          />
          <br />
          <RaisedButton
            label='新規登録'
            onClick={this.handleSubmit.bind(this)}
          />
        </Modal>
      </div>
    )
  }
}

export default withRouter(connect()(Landing))
