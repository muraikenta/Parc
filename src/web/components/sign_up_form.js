import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FormError from './form_error'

class SignUpForm extends React.PureComponent {
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

  onSubmitHandler(e) {
    const {name, email, password} = this.state
    e.preventDefault()
    this.props.onSubmit({name, email, password})
  }

  render() {
    const {onSubmit, headErrorMessages} = this.props

    return (
      <form onSubmit={this.onSubmitHandler.bind(this)}>
        <h2>アカウントを作成</h2>
        <FormError messages={headErrorMessages} />
        <TextField
          floatingLabelText='ユーザー名'
          ref='name'
          onChange={this.handleChangeName.bind(this)}
        />
        <br />
        <TextField
          floatingLabelText='メールアドレス'
          ref='email'
          onChange={this.handleChangeEmail.bind(this)}
        />
        <br />
        <TextField
          floatingLabelText='パスワード'
          type="password"
          ref='password'
          onChange={this.handleChangePassword.bind(this)}
        />
        <br />
        <RaisedButton
          type='submit'
          label="新規登録"
          style={{marginTop: 20}}
        />
      </form>
    )
  }
}

export default SignUpForm
