import { combineReducers } from 'redux'
import posts from './posts'
import postForm from './post_form'

const reducer = combineReducers({
  posts,
  postForm,
})

export default reducer
