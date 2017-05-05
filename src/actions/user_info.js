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

const followRequest = () => {
  return {
    type: ActionTypes.USER__FOLLOW_REQUEST,
  }
}

const followSuccess = (data) => {
  return {
    type: ActionTypes.USER__FOLLOW_SUCCESS,
    data,
  }
}

const followFail = (error) => {
  return {
    type: ActionTypes.USER__FOLLOW_FAIL,
    error,
  }
}

export const follow = (id) => (dispatch) => {
  dispatch(followRequest())

  api.post(`/users/${id}/follow`)
     .then((json) => { dispatch(followSuccess(json.data)) })
     .catch((error) => { dispatch(followFail(error)) })
}

const unfollowRequest = () => {
  return {
    type: ActionTypes.USER__UNFOLLOW_REQUEST,
  }
}

const unfollowSuccess = (data) => {
  return {
    type: ActionTypes.USER__UNFOLLOW_SUCCESS,
    data,
  }
}

const unfollowFail = (error) => {
  return {
    type: ActionTypes.USER__UNFOLLOW_FAIL,
    error,
  }
}

export const unfollow = (id) => (dispatch) => {
  dispatch(unfollowRequest())

  api.delete(`/users/${id}/unfollow`)
     .then((json) => { dispatch(unfollowSuccess(json.data)) })
     .catch((error) => { dispatch(unfollowFail(error)) })
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

  api.patch(`/users/${id}`, {profile})
    .then((json) => { dispatch(updateProfileSuccess(json.data)) })
    .catch((error) => { dispatch(updateProfileFail(error.message)) })
}
