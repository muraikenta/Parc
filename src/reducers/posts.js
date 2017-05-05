import {ActionTypes} from '../constants/app'

const initialState = {
  items: {},
  isFetching: false,
  error: null,
}

const nomalizePosts = (items) => {
  const nomalizedPosts = {}
  items.forEach(post => {
    nomalizedPosts[post.id] = post
  })
  return nomalizedPosts
}

const updatePost = (items, post) => {
  return {
    ...items,
    [post.id]: post,
  }
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.POST__FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case ActionTypes.POST__FETCH_SUCCESS:
      return {
        ...state,
        items: nomalizePosts(action.items),
        isFetching: false,
      }
    case ActionTypes.POST__FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case ActionTypes.POST__CREATE_SUCCESS:
      return {
        ...state,
        items: [action.item, ...state.items],
      }
    case ActionTypes.POST__CREATE_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default posts
