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

  MODAL__OPEN: null,
  MODAL__CLOSE: null,
})

export const UserModalTypes = keyMirror({
  SIGNUP: null,
  LOGIN: null,
})
