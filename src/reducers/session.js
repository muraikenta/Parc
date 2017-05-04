import {ActionTypes} from '../constants/app'

const initialState = {
  me: {},
  isSignedIn: false,
}

const session = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SESSION__SET_IS_SIGNED_IN:
      return {
        ...state,
        isSignedIn: action.isSignedIn,
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
