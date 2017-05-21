import {connect} from 'react-redux'
import {FormTypes} from '../../constants/app'
import {signup} from '../../actions/session'
import SignUpForm from '../components/sign_up_form'

const mapStateToProps = (state) => {
  const form = state.forms[FormTypes.SIGN_UP]
  return {
    headErrorMessages: form ? form.apiErrorMessages : [],
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({name, username, email, password}) => {
    dispatch(signup({name, username, email, password}))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
