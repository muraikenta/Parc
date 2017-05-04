import {ActionTypes} from '../constants/app'

const initialState = {
  me: {},
  authData: null,
  isSignedIn: false,
}

const session = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SESSION__SET_IS_SIGNED_IN:
      return {
        ...state,
        isSignedIn: true,
        authData: action.authData,
      }

    case ActionTypes.SESSION__SET_IS_SIGNED_OUT:
      return {
        ...state,
        isSignedIn: false,
        authData: null,
      }

    case ActionTypes.SESSION__SET_ME:
      return {
        ...state,
        me: action.me,
      }

    default:
      return state
  }
}

export default session
