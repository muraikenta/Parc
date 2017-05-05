import {connect} from 'react-redux'
import {FormTypes} from '../../constants/app'
import {signup} from '../../actions/session'
import SignUpForm from '../components/sign_up_form'

const mapStateToProps = (state) => {
  const form = state.forms[FormTypes.SIGN_UP]
  console.log(form)
  return {
    headErrorMessages: form ? form.apiErrorMessages : [],
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({name, email, password}) => {
    dispatch(signup({name, email, password}))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)