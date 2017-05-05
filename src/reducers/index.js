import {combineReducers} from 'redux'
import posts from './posts'
import postForm from './post_form'
import modal from './modal'
import session from './session'
import favorites from './favorites'
import userInfo from './user_info'

const reducer = combineReducers({
  posts,
  postForm,
  modal,
  session,
  favorites,
  userInfo,
})

export default reducer
