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
  name: string,
  username: string,
  email: string,
  password: string,
}

class SignUpForm extends React.PureComponent {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
    }
  }

  handleChangeName() {
    const name = this.refs.name.getValue()
    this.setState({name})
  }

  handleChangeUsername() {
    const username = this.refs.username.getValue()
    this.setState({username})
  }

  handleChangeEmail() {
    const email = this.refs.email.getValue()
    this.setState({email})
  }

  handleChangePassword() {
    const password = this.refs.password.getValue()
    this.setState({password})
  }

  onSubmitHandler(e: Event) {
    const {name, username, email, password} = this.state
    e.preventDefault()
    this.props.onSubmit({name, username, email, password})
  }

  render() {
    const {headErrorMessages} = this.props

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
          floatingLabelText='アカウント名'
          ref='username'
          style={styles.textField}
          onChange={this.handleChangeUsername.bind(this)}
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
          type='password'
          style={styles.textField}
          ref='password'
          onChange={this.handleChangePassword.bind(this)}
        />
        <br />
        <RaisedButton
          type='submit'
          primary={true}
          style={styles.submitButton}
          label='新規登録'
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

export default SignUpForm
