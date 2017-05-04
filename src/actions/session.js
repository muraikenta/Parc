import Cookies from 'js-cookie'
import api from '../lib/api'
import {ActionTypes} from '../constants/app'

export const setIsSignedIn = (isSignedIn) => {
  return {
    type: ActionTypes.SESSION__SET_IS_SIGNED_IN,
    isSignedIn,
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
       dispatch(setIsSignedIn(false))
     })
}

export const signup = ({name, email, password}, callback) => (dispatch) => {
  api.post('/auth', {name, email, password})
     .then((res) => {
       const {accessToken, client, uid} = res.headers
       Cookies.set('authData', {accessToken, client, uid})
       dispatch(setMe(res.data.data))
       callback()
     })
     .catch(() => { })
}
