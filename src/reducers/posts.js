import {ActionTypes} from '../constants/app'

const initialState = {
  items: [],
  isFetching: false,
  error: null,
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.POST__FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case ActionTypes.POST__FETCH_SUCCESS:
      return {
        ...state,
        items: action.items,
        isFetching: false,
      }
    case ActionTypes.POST__FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default posts
