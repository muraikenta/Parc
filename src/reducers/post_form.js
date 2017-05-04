import {ActionTypes} from '../constants/app'

const initialState = {
  isModalOpen: false,
  value: '',
  error: null,
}

const postForm = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.POST__CREATE_SUCCESS:
      return {
        ...initialState,
      }
    case ActionTypes.POST__CREATE_FAIL:
      return {
        ...state,
        error: action.error,
      }
    case ActionTypes.POST_FORM__CLOSE:
      return {
        ...state,
        isModalOpen: false,
      }
    case ActionTypes.POST_FORM__OPEN:
      return {
        ...state,
        isModalOpen: true,
      }
    case ActionTypes.POST_FORM__UPDATE_VALUE:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}

export default postForm
