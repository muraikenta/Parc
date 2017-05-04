import { combineReducers } from 'redux'
import posts from './posts'
import postForm from './post_form'
import session from './session'
import userInfo from './user_info'

const reducer = combineReducers({
  posts,
  postForm,
  session,
  userInfo,
})

export default reducer
