import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

import { DISPLAY_ALERT, CLEAR_ALERT } from './actions'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  token: null,
  userLocation: '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(dispatch({ type: CLEAR_ALERT }), 3000)
  }

  const registerUser = async (currentUser) => {
    console.log(currentUser)
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// lets make sure to use this contxt hook so that we dont have to create this in every component that needs
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
