import styled from 'styled-components'

import { Outlet, Link } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-jobs'>add jobs</Link>
        <Link to='add-jobs'>add gvfsvrgrwsgv jobs</Link>
        <Link to='add-jobs'>addsvbsgrwte5sthdszah jobs</Link>
        <Link to='add-jobs'>addshjhfmnhjd jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
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
