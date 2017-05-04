import { combineReducers } from 'redux'
import posts from './posts'
import userInfo from './user_info'

const reducer = combineReducers({
  posts,
  userInfo,
})

export default reducer
