// import Wrapper from '../assets/css-wrapper/landing-wrapper'
import styled from 'styled-components'
import main from '../assets/images/main.svg'
import { Logo } from '../components/'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            <span>Job</span>-Stall
          </h1>
          <p>
            Fastest way to market your needs creativly and finding the cool new
            job or to get the things done with respect to specific skills that
            you need, in the demanding world we are in now ..!!
          </p>
          <button className='btn btn-hero'>Register / Login</button>
        </div>
        <img src={main} alt='job-stall-main-pic' className='img main-img' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`

export default Landing
