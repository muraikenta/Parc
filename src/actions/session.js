import api from '../lib/api'
import Cookies from 'js-cookie'

export const signup = ({name, email, password}, callback) => (dispatch) => {
  api.post('/auth', {name, email, password})
     .then((res) => {
       const {accessToken, client, uid} = res.headers
       Cookies.set('authData', {accessToken, client, uid})
       // TODO: dispatch to set user
       callback()
     })
     .catch(() => { })
}
