import {ActionTypes, UserModalTypes} from '../constants/app'

const initialState = {
  isModalOpen: false,
  identifier: null,
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODAL__OPEN:
      return {
        ...state,
        isModalOpen: true,
        identifier: action.identifier
      }
    case ActionTypes.MODAL__CLOSE:
      return {
        ...state,
        isModalOpen: false,
        identifier: action.identifier
      }
    default:
      return state
  }
}

export default modal
