import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

import { DISPLAY_ALERT } from './actions'

export const initialState = {
  isLoading: false,
  showAlert: true,
  alertText: '',
  alertType: 'success',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
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
