import {ActionTypes} from '../constants/app'

export const openSignupModal = (displayModalType) => {
  return {
    type: ActionTypes.MODAL__OPEN_SIGNUP,
    displayModalType,
  }
}

export const openLoginModal = (displayModalType) => {
  return {
    type: ActionTypes.MODAL__OPEN_LOGIN,
    displayModalType
  }
}

export const closeModal = () => {
  return {
    type: ActionTypes.MODAL__CLOSE,
  }
}
