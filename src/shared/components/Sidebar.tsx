import React from 'react'
import { NavLink } from 'react-router-dom'
import { NAVBAR_ROUTES } from '../constant/routes'

export const Sidebar = () => {
  return (
    <nav className='sticky top-20 flex flex-col'>
      <ul>
        {NAVBAR_ROUTES.map((val) => (
          <NavLink
            key={val.name}
            to={`/${val.to}`}
            className={({ isActive }) =>
              isActive
                ? 'hidden sm:block px-3 py-2 mt-2 text-lg font-medium rounded-sm bg-light-secondary dark:bg-dark-secondary transform scale-110'
                : 'hidden sm:block px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-light-secondary dark:hover:bg-dark-secondary'}
          >
            {val.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}
