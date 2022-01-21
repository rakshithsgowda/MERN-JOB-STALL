import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const Alert = () => {
  const { alertType, alertText } = useAppContext()
  return (
    <Wrapper className={`alert alert-${alertType}`}>
      <h4> ho-hoo!! {alertText} </h4>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h4 {
    padding-top: 1.38rem;
  }
`

export default Alert
