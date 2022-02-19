import styled from 'styled-components'

import { Outlet, Link } from 'react-router-dom'
import SmallSidebar from '../../components/SmallSidebar'
import BigSidebar from '../../components/BigSidebar'
import Navbar from '../../components/Navbar'

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
        </main>
        <Navbar />
        <div className='dashboard-page'>
          <Outlet />
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`

export default SharedLayout
