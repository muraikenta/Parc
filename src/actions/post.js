import api from '../lib/api'
import {ActionTypes} from '../constants/app'

const fetchPostRequest = () => {
  return {
    type: ActionTypes.POST__FETCH_REQUEST,
  }
}

const fetchPostSuccess = (items) => {
  return {
    type: ActionTypes.POST__FETCH_SUCCESS,
    items,
  }
}

const fetchPostFail = (error) => {
  return {
    type: ActionTypes.POST__FETCH_FAIL,
    error,
  }
}

export const fetchPosts = () => (dispatch) => {
  dispatch(fetchPostRequest())

  api.get('/posts')
     .then((json) => { dispatch(fetchPostSuccess(json.data)) })
     .catch((error) => { dispatch(fetchPostFail(error)) })
}

const createPostRequest = () => {
  return {
    type: ActionTypes.POST__CREATE_REQUEST,
  }
}

const createPostSuccess = (item) => {
  return {
    type: ActionTypes.POST__CREATE_SUCCESS,
    item,
  }
}

const createPostFail = (error) => {
  return {
    type: ActionTypes.POST__CREATE_FAIL,
    error,
  }
}

export const createPost = (value) => (dispatch) => {
  dispatch(createPostRequest())

  api.post('/posts', {post: value})
     .then((json) => { dispatch(createPostSuccess(json.data)) })
     .catch((error) => { dispatch(createPostFail(error.message)) })
}
