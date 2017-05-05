import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({
  SESSION__SET_ME: null,
  SESSION__SIGN_IN: null,
  SESSION__SIGN_OUT: null,

  POST__FETCH_REQUEST: null,
  POST__FETCH_SUCCESS: null,
  POST__FETCH_FAIL: null,
  POST__CREATE_REQUEST: null,
  POST__CREATE_SUCCESS: null,
  POST__CREATE_FAIL: null,
  POST_FORM__CLOSE: null,
  POST_FORM__OPEN: null,
  POST_FORM__UPDATE_VALUE: null,

  FAVORITE__CREATE_REQUEST: null,
  FAVORITE__CREATE_SUCCEESS: null,
  FAVORITE__CREATE_FAIL: null,
  FAVORITE__DELETE_REQUEST: null,
  FAVORITE__DELETE_SUCCEESS: null,
  FAVORITE__DELETE_FAIL: null,

  USER__FETCH_REQUEST: null,
  USER__FETCH_SUCCESS: null,
  USER__FETCH_FAIL: null,
  USER__FOLLOW_REQUEST: null,
  USER__FOLLOW_SUCCESS: null,
  USER__FOLLOW_FAIL: null,
  USER__UNFOLLOW_REQUEST: null,
  USER__UNFOLLOW_SUCCESS: null,
  USER__UNFOLLOW_FAIL: null,

  PROFILE__UPDATE_REQUEST: null,
  PROFILE__UPDATE_SUCCESS: null,
  PROFILE__UPDATE_FAIL: null,

  MODAL__OPEN: null,
  MODAL__CLOSE: null,
})

export const UserModalTypes = keyMirror({
  SIGNUP: null,
  LOGIN: null,
})
