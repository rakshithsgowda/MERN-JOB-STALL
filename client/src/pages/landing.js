import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} alt='job-stall' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job-<span>Stall</span>
          </h1>
          <p>
            Fastest way to market your needs creativly and finding the cool new
            job or to get the things done with respect to specific skills that
            you need, in the demanding world we are in now ..!!
          </p>
        </div>
      </div>
    </main>
  )
}

export default Landing
