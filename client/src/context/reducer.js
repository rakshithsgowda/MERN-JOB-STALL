import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from './actions'

const reducer = (state, action) => {
  if ((action.type = DISPLAY_ALERT)) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values',
    }
  }
  if ((action.type = CLEAR_ALERT)) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  throw new Error(`Something bad happened. ${action.type}`)
}
export default reducer
