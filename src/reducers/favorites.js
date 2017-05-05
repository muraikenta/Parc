import {ActionTypes} from '../constants/app'

const initialState = {
  isCreating: false,
  isDeleting: false,
  error: null,
}

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FAVORITE__CREATE_REQUEST:
      return {
        ...state,
        isCreating: true,
      }
    case ActionTypes.FAVORITE__CREATE_SUCCEESS:
      return {
        ...state,
        isCreating: false,
      }
    case ActionTypes.FAVORITE__CREATE_FAIL:
      return {
        ...state,
        isCreating: false,
        error: action.error,
      }
    case ActionTypes.FAVORITE__DELETE_REQUEST:
      return {
        ...state,
        isDeleting: true,
      }
    case ActionTypes.FAVORITE__DELETE_SUCCEESS:
      return {
        ...state,
        isDeleting: false,
      }
    case ActionTypes.FAVORITE__DELETE_FAIL:
      return {
        ...state,
        isDeleting: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default favorites
