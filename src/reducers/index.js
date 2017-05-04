import { combineReducers } from 'redux'
import posts from './posts'
import session from './session'

const reducer = combineReducers({
  posts,
  session,
})

export default reducer
