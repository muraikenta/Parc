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
    case ActionTypes.PROFILE__UPDATE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.data],
      }
    case ActionTypes.PROFILE__UPDATE_FAIL:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
export default userInfo
