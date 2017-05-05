import {combineReducers} from 'redux'
import posts from './posts'
import postForm from './post_form'
import session from './session'
import favorites from './favorites'

const reducer = combineReducers({
  posts,
  postForm,
  session,
  favorites,
})

export default reducer
