import { combineReducers } from 'redux'
import posts from './posts'
import postForm from './post_form'
import modal from './modal'
import session from './session'

const reducer = combineReducers({
  posts,
  postForm,
  modal,
  session,
})

export default reducer
