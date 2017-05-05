import Cookies from 'js-cookie'
import api from '../lib/api'
import {ActionTypes} from '../constants/app'

export const setIsSignedIn = (authData) => {
  return {
    type: ActionTypes.SESSION__SIGN_IN,
    authData,
  }
}

const deleteSession = () => {
  return {
    type: ActionTypes.SESSION__SIGN_OUT,
  }
}

const setMe = (me) => {
  return {
    type: ActionTypes.SESSION__SET_ME,
    me,
  }
}

export const fetchMe = ({uid, accessToken, client}) => (dispatch) => {
  api.get('/auth/validate_token', {uid, accessToken, client})
     .then((res) => { dispatch(setMe(res.data.data)) })
     .catch((_e) => {
       Cookies.remove('authData')
       dispatch(deleteSession())
     })
}

export const signup = ({name, email, password}) => (dispatch) => {
  api.post('/auth', {name, email, password})
     .then((res) => { dispatch(signInSuccess(res)) })
}

export const signin = ({email, password}) => (dispatch) => {
  api.post('/auth/sign_in', {email, password})
     .then((res) => { dispatch(signInSuccess(res)) })
}

const signInSuccess = (res) => (dispatch) => {
  const {accessToken, client, uid} = res.headers
  Cookies.set('authData', {accessToken, client, uid})
  const authData = {accessToken, client, uid}
  dispatch(setIsSignedIn(authData))
  dispatch(setMe(res.data.data))
}

export const signOut = ({uid, accessToken, client}) => (dispatch) => {
  api.delete('/auth/sign_out', {uid, accessToken, client})
     .then((res) => {
       Cookies.remove('authData')
       dispatch(deleteSession())
     })
}
