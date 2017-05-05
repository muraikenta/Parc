import {ActionTypes} from '../constants/app'

const initialState = {
  data: {},
  isFetching: false,
  error: null,
}

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER__FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case ActionTypes.USER__FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      }
    case ActionTypes.USER__FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case ActionTypes.USER__FOLLOW_SUCCESS:
    case ActionTypes.USER__UNFOLLOW_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          following: action.data.following,
        },
      }
    default:
      return state
  }
}
export default userInfo
