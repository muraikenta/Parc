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
      <form
        style={styles.form}
        onSubmit={this.onSubmitHandler.bind(this)}
      >
        <h2>アカウントを作成</h2>
        <FormError messages={headErrorMessages} />
        <TextField
          floatingLabelText='ユーザー名'
          ref='name'
          style={styles.textField}
          onChange={this.handleChangeName.bind(this)}
        />
        <br />
        <TextField
          floatingLabelText='メールアドレス'
          ref='email'
          style={styles.textField}
          onChange={this.handleChangeEmail.bind(this)}
        />
        <br />
        <TextField
          floatingLabelText='パスワード'
          type="password"
          style={styles.textField}
          ref='password'
          onChange={this.handleChangePassword.bind(this)}
        />
        <br />
        <RaisedButton
          type='submit'
          primary={true}
          style={styles.submitButton}
          label="新規登録"
        />
      </form>
    )
  }
}

const styles = {
  form: {
    textAlign: 'center',
  },
  textField: {
    width: '100%',
  },
  submitButton: {
    width: '100%',
    marginTop: 20,
  },
}

export default SignUpForm
