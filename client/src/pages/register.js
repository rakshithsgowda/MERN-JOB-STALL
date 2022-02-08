import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Logo, FormRow, Alert } from '../components'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)

  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!password || !email || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { name, email, password }

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login successfull..!! Redirecting User',
      })
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'Registeration successfull redirecting..!!',
      })
    }
    console.log(values)
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className='full-page '>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h1>{values.isMember ? 'Login' : 'Register'}</h1>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* Password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {values.isMember ? ' Not a Member?' : 'Already a member ?'}
          <button
            type='button'
            onClick={toggleMember}
            className='member-btn'
            disabled={isLoading}
          >
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

// --------------------------------------------------------------------

const Wrapper = styled.section`
  .logo {
    display: block;
    margin: -50px 40px;
    padding: 0;
    z-index: -1;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h1 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`

export default Register
