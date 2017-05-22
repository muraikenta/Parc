import {ActionTypes} from '../constants/app'

const forms = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FORM__API_ERROR:
      return {
        ...state,
        [action.formType]: {
          apiErrorMessages: action.errorMessages,
        },
      }

    default:
      return state
  }
}

export default forms
