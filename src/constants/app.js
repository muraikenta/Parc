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

  USER__FETCH_REQUEST: null,
  USER__FETCH_SUCCESS: null,
  USER__FETCH_FAIL: null,
  USER__FOLLOW_REQUEST: null,
  USER__FOLLOW_SUCCESS: null,
  USER__FOLLOW_FAIL: null,
  USER__UNFOLLOW_REQUEST: null,
  USER__UNFOLLOW_SUCCESS: null,
  USER__UNFOLLOW_FAIL: null,
})
