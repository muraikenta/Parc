import {ActionTypes} from '../constants/app'

export const openSignupModal = () => {
  return {
    type: ActionTypes.MODAL__OPEN_SIGNUP,
  }
}

export const openLoginModal = () => {
  return {
    type: ActionTypes.MODAL__OPEN_LOGIN,
  }
}

export const closeModal = () => {
  return {
    type: ActionTypes.MODAL__CLOSE,
  }
}
