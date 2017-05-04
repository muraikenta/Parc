import {ActionTypes} from '../constants/app'

const close = () => {
  return {
    type: ActionTypes.POST_FORM__CLOSE,
  }
}

export const closePostFormModal = () => (dispatch) => {
  dispatch(close())
}

const open = () => {
  return {
    type: ActionTypes.POST_FORM__OPEN,
  }
}

export const openPostFormModal = () => (dispatch) => {
  dispatch(open())
}

const updateValue = (value) => {
  return {
    type: ActionTypes.POST_FORM__UPDATE_VALUE,
    value,
  }
}

export const updatePostFormValue = (value) => (dispatch) => {
  dispatch(updateValue(value))
}
