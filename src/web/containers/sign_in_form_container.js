import {connect} from 'react-redux'
import {FormTypes} from '../../constants/app'
import {signin} from '../../actions/session'
import SignInForm from '../components/sign_in_form'

const mapStateToProps = (state) => {
  const form = state.forms[FormTypes.SIGN_IN]
  return {
    headErrorMessages: form ? form.apiErrorMessages : [],
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({login, password}) => {
    dispatch(signin({login, password}))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
