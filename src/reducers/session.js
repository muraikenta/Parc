import {ActionTypes} from '../constants/app'

const initialState = {
  me: {},
  authData: null,
  isSignedIn: false,
}

const session = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SESSION__SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        authData: action.authData,
      }

    case ActionTypes.SESSION__SIGN_OUT:
      return initialState

    case ActionTypes.SESSION__SET_ME:
      return {
        ...state,
        me: action.me,
      }

    case ActionTypes.PROFILE__UPDATE_SUCCESS:
      return {
        ...state,
        me: action.data,
      }

    default:
      return state
  }
}

export default session
