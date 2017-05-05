import {combineReducers} from 'redux'
import forms from './forms'
import modal from './modal'
import posts from './posts'
import postForm from './post_form'
import session from './session'
import userInfo from './user_info'

const reducer = combineReducers({
  forms,
  modal,
  posts,
  postForm,
  session,
  userInfo,
})

export default reducer
