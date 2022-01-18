import { DISPLAY_ALERT } from './actions'

const reducer = (state, action) => {
  if ((action.type = DISPLAY_ALERT)) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values',
    }
  }
  throw new Error(`Something bad happened. ${action.type}`)
}
export default reducer
