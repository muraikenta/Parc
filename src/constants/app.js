import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({
  POST__FETCH_REQUEST: null,
  POST__FETCH_SUCCESS: null,
  POST__FETCH_FAIL: null,
  POST__CREATE_REQUEST: null,
  POST__CREATE_SUCCESS: null,
  POST__CREATE_FAIL: null,

  POST_FORM__CLOSE: null,
  POST_FORM__OPEN: null,
  POST_FORM__UPDATE_VALUE: null,
})
