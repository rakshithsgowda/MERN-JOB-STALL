import axios from 'axios'
import React, { useContext, useReducer } from 'react'
import reducer from './reducer'

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_BEGIN,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.parse(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
  }
  const removeUserFromLocalStorage = ({ user, token, location }) => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
  }
  // ------------------------------------------------------------------------------------------
  // REGISTER USER
  // ------------------------------------------------------------------------------------------
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post('/api/v1/auth/register ', currentUser)
      console.log(`register user ${response}`)
      const { user, token, location } = response.data
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  // -------------------------------------------------------------------------------------
  // LOGIN USER
  // -------------------------------------------------------------------------------------
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const { data } = await axios.post('/api/v1/auth/login ', currentUser)
      const { user, token, location } = data
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  // -------------------------------------------------------------------------------------
  // SETUP - USER
  // -------------------------------------------------------------------------------------
  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN })
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint} `,
        currentUser
      )
      const { user, token, location } = data
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        setupUser,
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
