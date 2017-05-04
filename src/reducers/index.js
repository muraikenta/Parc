import {combineReducers} from 'redux'
import posts from './posts'
import postForm from './post_form'
import modal from './modal'
import session from './session'
import userInfo from './user_info'

const reducer = combineReducers({
  posts,
  postForm,
  modal,
  session,
  userInfo,
})

export default reducer
