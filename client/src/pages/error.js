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

const Wrapper = styled.div`
  text-align: center;
  img {
    margin: 10vh;
    height: 60vh;
  }
`

export default Error
