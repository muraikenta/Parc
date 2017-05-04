import {combineReducers} from 'redux'
import posts from './posts'
import postForm from './post_form'
import session from './session'

const reducer = combineReducers({
  posts,
  postForm,
  session,
})

export default reducer
