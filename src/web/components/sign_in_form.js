import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FormError from './form_error'

class SignInForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
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
    const {email, password} = this.state
    e.preventDefault()
    this.props.onSubmit({email, password})
  }

  render() {
    const {onSubmit, headErrorMessages} = this.props

    return (
      <form
        style={styles.form}
        onSubmit={this.onSubmitHandler.bind(this)}
      >
        <h2>ログイン</h2>
        <FormError messages={headErrorMessages} />
        <TextField
          floatingLabelText='メールアドレス'
          style={styles.textField}
          ref='email'
          onChange={this.handleChangeEmail.bind(this)}
        />
        <br />
        <TextField
          floatingLabelText='パスワード'
          style={styles.textField}
          type="password"
          ref='password'
          onChange={this.handleChangePassword.bind(this)}
        />
        <br />
        <RaisedButton
          type='submit'
          primary={true}
          style={styles.submitButton}
          label="ログイン"
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

export default SignInForm
