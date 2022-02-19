import styled from 'styled-components'
import ErrorImage from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <img src={ErrorImage} alt='Error-page-pic' />
      <h3>THis is a error PAge..!! There Seems to be a problem</h3>
      <Link to='/'> Back Home</Link>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`

export default Error
