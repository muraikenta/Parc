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
       dispatch(setIsSignedOut())
     })
}

export const signup = ({name, email, password}, callback) => (dispatch) => {
  api.post('/auth', {name, email, password})
     .then((res) => {
       const {accessToken, client, uid} = res.headers
       const authData = {accessToken, client, uid}
       Cookies.set('authData', authData)
       dispatch(setIsSignedIn(authData))
       dispatch(setMe(res.data.data))
       callback()
     })
     .catch(() => { })
}

export const signOut = ({uid, accessToken, client}, callback) => (dispatch) => {
  api.delete('/auth/sign_out', {uid, accessToken, client})
     .then((res) => {
       Cookies.remove('authData')
       dispatch(deleteSession())
       callback()
     })
}
