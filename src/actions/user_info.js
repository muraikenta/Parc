import api from '../lib/api'
import {ActionTypes} from '../constants/app'

const fetchUserInfoRequest = () => {
  return {
    type: ActionTypes.USER__FETCH_REQUEST,
  }
}

const fetchUserInfoSuccess = (data) => {
  return {
    type: ActionTypes.USER__FETCH_SUCCESS,
    data,
  }
}

const fetchUserInfoFail = (error) => {
  return {
    type: ActionTypes.USER__FETCH_FAIL,
    error,
  }
}

export const fetchUserInfo = (id) => (dispatch) => {
  dispatch(fetchUserInfoRequest())

  api.get(`/users/${id}`)
     .then((json) => { dispatch(fetchUserInfoSuccess(json.data)) })
     .catch((error) => { dispatch(fetchUserInfoFail(error.message)) })
}
