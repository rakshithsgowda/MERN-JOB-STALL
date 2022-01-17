import { useState } from 'react'
import styled from 'styled-components'
import { Logo, FormRow, Alert } from '../components'

const initialState = {
  name: '',
  mail: '',
  password: '',
  isMember: true,
  showAlert: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

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
        <h3>Registeration</h3>
        {values.showAlert && <Alert />}

        {/* name input */}
        <FormRow
          type='text'
          value={values.name}
          name='name'
          handleChange={handleChange}
        />
        {/* email input */}
        <FormRow
          type='email'
          value={values.email}
          name='email'
          handleChange={handleChange}
        />
        {/* Password input */}
        <FormRow
          type='password'
          value={values.password}
          name='password'
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
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
