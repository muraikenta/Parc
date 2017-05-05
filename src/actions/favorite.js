import api from '../lib/api'
import {ActionTypes} from '../constants/app'

const favoriteRequest = () => {
  return {
    type: ActionTypes.FAVORITE__CREATE_REQUEST,
  }
}

const favoriteSuccess = (post) => {
  return {
    type: ActionTypes.FAVORITE__CREATE_SUCCEESS,
    post,
  }
}

const favoriteFail = (error) => {
  return {
    type: ActionTypes.FAVORITE__CREATE_FAIL,
    error,
  }
}

export const favorite = (post) => (dispatch) => {
  dispatch(favoriteRequest())

  api.post(`/posts/${post.id}/favorite`)
     .then((json) => { dispatch(favoriteSuccess(json.data)) })
     .catch((error) => { dispatch(favoriteFail(error.message)) })
}

const unfavoriteRequest = () => {
  return {
    type: ActionTypes.FAVORITE__DELETE_REQUEST,
  }
}

const unfavoriteSuccess = (post) => {
  return {
    type: ActionTypes.FAVORITE__DELETE_SUCCEESS,
    post,
  }
}

const unfavoriteFail = (error) => {
  return {
    type: ActionTypes.FAVORITE__DELETE_FAIL,
    error,
  }
}

export const unfavorite = (post) => (dispatch) => {
  dispatch(unfavoriteRequest())

  api.delete(`/posts/${post.id}/unfavorite`)
     .then((json) => { dispatch(unfavoriteSuccess(json.data)) })
     .catch((error) => { dispatch(unfavoriteFail(error.message)) })
}
