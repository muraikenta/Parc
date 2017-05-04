import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({
  POST__FETCH_REQUEST: null,
  POST__FETCH_SUCCESS: null,
  POST__FETCH_FAIL: null,
  MODAL__OPEN_SIGNUP: null,
  MODAL__OPEN_LOGIN: null,
  MODAL__CLOSE: null,
})

export const UserModalTypes = keyMirror({
  SIGNUP: null,
  LOGIN: null,
})
