import { combineReducers } from 'redux'
import posts from './posts'
import postForm from './post_form'
import modal from './modal'

const reducer = combineReducers({
  posts,
  postForm,
  modal,
})

export default reducer
