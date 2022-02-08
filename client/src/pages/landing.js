import Wrapper from '../assets/css-wrapper/landing-wrapper'
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

export default Landing
