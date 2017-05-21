import {combineReducers} from 'redux'
import forms from './forms'
import modal from './modal'
import posts from './posts'
import postForm from './post_form'
import session from './session'
import favorites from './favorites'
import user from './user'

const reducer = combineReducers({
  forms,
  modal,
  posts,
  postForm,
  session,
  favorites,
  user,
})

export default reducer
