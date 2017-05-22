// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FormError from './form_error'

type Props = {
  headErrorMessages: string[],
  onSubmit: (Object) => void,
}

type State = {
  login: string,
  password: string,
}

class SignInForm extends React.PureComponent {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {
      login: '',
      password: '',
    }
  }

  handleChangeLogin() {
    const login = this.refs.login.getValue()
    this.setState({login})
  }

  handleChangePassword() {
    const password = this.refs.password.getValue()
    this.setState({password})
  }

  onSubmitHandler(e: Event) {
    const {login, password} = this.state
    e.preventDefault()
    this.props.onSubmit({login, password})
  }

  render() {
    const {headErrorMessages} = this.props

    return (
      <form
        style={styles.form}
        onSubmit={this.onSubmitHandler.bind(this)}
      >
        <h2>ログイン</h2>
        <FormError messages={headErrorMessages} />
        <TextField
          floatingLabelText='メールアドレスまたはアカウント名'
          style={styles.textField}
          ref='login'
          onChange={this.handleChangeLogin.bind(this)}
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
    height: 50,
    marginTop: 20,
  },
}

export default SignInForm
