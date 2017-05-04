import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({
  SESSION__SET_ME: null,
  SESSION__SET_IS_SIGNED_IN: null,

  POST__FETCH_REQUEST: null,
  POST__FETCH_SUCCESS: null,
  POST__FETCH_FAIL: null,
  POST__CREATE_REQUEST: null,
  POST__CREATE_SUCCESS: null,
  POST__CREATE_FAIL: null,
})
