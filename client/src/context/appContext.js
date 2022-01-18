import React, { createContext, useContext, useReducer, useState } from 'react'

export const initialState = {
  isLoading: false,
  showAlert: true,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState)
  return (
    <AppContext.Provider
      value={{
        ...state,
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
