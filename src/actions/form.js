import {ActionTypes} from '../constants/app'
export const setApiError = (formType, errorMessages) => ({
  type: ActionTypes.FORM__API_ERROR,
  formType,
  errorMessages,
})
