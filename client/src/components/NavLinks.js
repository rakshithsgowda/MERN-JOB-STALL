import links from '../utils/links.js'
import { NavLink } from 'react-router-dom'
// import { useAppContext } from '../context/appContext.js'

const NavLinks = ({ toggleSidebar }) => {
  // const { toggleSidebar,showSidebar } = useAppContext()
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon, id } = link

        return (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={toggleSidebar}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks
