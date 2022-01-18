import { useState } from 'react'
import styled from 'styled-components'
import { Logo, FormRow, Alert } from '../components'
import { useAppContext } from '../context/appContext'

const initialState = {
  name: '',
  mail: '',
  password: '',
  isMember: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const { isLoading, showAlert } = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
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
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 40px;
    margin-bottom: 1.38rem;
    over-flow: hidden;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h3 {
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
