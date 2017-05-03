import axios from 'axios'
import _ from 'lodash'
import Cookies from 'js-cookie'

const baseURL = {
  development: 'http://localhost:3100',
  test: 'http://localhost:3100',
  production: 'http://xxx.com',
}[process.env.NODE_ENV]

const api = axios.create({baseURL})

api.interceptors.request.use((config) => {
  config.data = _.snakecaseKeys(config.data)
  const authData = Cookies.getJSON('authData')
  if (authData) {
    config.headers = {...config.headers, ..._.kebabCaseKeys(authData)}
  }
  return config
})

api.interceptors.response.use((res) => {
  res.data = _.camelcaseKeys(res.data)
  res.headers = _.camelcaseKeys(res.headers)
  return res
})

export default api
