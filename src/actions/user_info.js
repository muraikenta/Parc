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

const updateProfileRequest = () => {
  return {
    type: ActionTypes.PROFILE__UPDATE_REQUEST,
  }
}

const updateProfileSuccess = (data) => {
  return {
    type: ActionTypes.PROFILE__UPDATE_SUCCESS,
    data,
  }
}

const updateProfileFail = (error) => {
  return {
    type: ActionTypes.PROFILE__UPDATE_FAIL,
    error,
  }
}

export const updateProfile = ({id, profile}) => (dispatch) => {
  dispatch(updateProfileRequest())

  api.put(`/users/${id}`, {profile})
    .then((json) => { dispatch(updateProfileSuccess(json.data)) })
    .catch((error) => { dispatch(updateProfileFail(error.message)) })
}
