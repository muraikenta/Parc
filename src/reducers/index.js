import { combineReducers } from 'redux'
import posts from './posts'
import modal from './modal'

const reducer = combineReducers({
  posts,
  modal,
})

export default reducer
