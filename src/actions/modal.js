import {ActionTypes} from '../constants/app'

export const openModal = (identifier) => {
  return {
    type: ActionTypes.MODAL__OPEN,
    identifier,
  }
}

export const closeModal = (identifier) => {
  return {
    type: ActionTypes.MODAL__CLOSE,
    identifier,
  }
}
