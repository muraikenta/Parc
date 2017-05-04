import { combineReducers } from 'redux'
import posts from './posts'
import postForm from './post_form'
import userInfo from './user_info'

const reducer = combineReducers({
  posts,
  postForm,
  userInfo,
})

export default reducer
