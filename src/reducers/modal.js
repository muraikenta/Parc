import {ActionTypes, UserModalTypes} from '../constants/app'

const initialState = {
  isModalOpen: false,
  displayModalType: '',
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODAL__OPEN_SIGNUP:
      return {
        ...state,
        isModalOpen: true,
        displayModalType: action.displayModalType,
      }
    case ActionTypes.MODAL__OPEN_LOGIN:
      return {
        ...state,
        isModalOpen: true,
        displayModalType: action.displayModalType,
      }
    case ActionTypes.MODAL__CLOSE:
      return {
        ...state,
        isModalOpen: false,
      }
    default:
      return state
  }
}

export default modal
