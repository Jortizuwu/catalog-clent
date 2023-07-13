import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { UilSignout, UilSignin } from '@iconscout/react-unicons'

import { logout } from '../../../../redux/features/auth/authSlice'
import { NAVBAR_ROUTES } from '../../../../shared/constant/routes'
import { dropMenuAction } from '../../../../redux/features/ui/uiSlice'

const AuthState = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.stopPropagation()
    dispatch(logout())
  }

  if (userInfo) {
    return (
      <section className='mt-4 w-full'>
        <div
          onClick={() => navigate(`profile?id=${userInfo.id_usuario}`)}
          className='cursor-pointer flex mt-2 flex-col px-3 py-2 text-lg gap-2 rounded-lg font-medium  bg-light-secondary dark:bg-dark-secondary'
        >
          <div className='flex hover:underline'>
            <img
              src='https://th.bing.com/th/id/R.222a0c1c776203f11931398e548baa16?rik=F71ru6AM6rfqLQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-tgS4J0JCr9Q%2fUYKEyJZBJXI%2fAAAAAAAAA1c%2frtk4queqJTY%2fs1600%2fJapan-Art-Painting-Fine-Wallpaper.jpg&ehk=vXz9k7%2f%2ba9gLu0yaAHchGjDAm7stinulXGzDVQPsc%2fg%3d&risl=&pid=ImgRaw&r=0'
              className='flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full'
            />
            <div className='flex flex-col ml-2'>
              <span className='text-xs font-semibold'>@{userInfo.nombre}</span>
              <span className='mt-1 text-xs leading-none'>
                {userInfo.apellidos}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className='text-xs leading-none rounded-sm p-2 ring-1 ring-red-500 text-center hover:bg-red-500'
          >
            Signout
            <UilSignout className=' ml-2 inline-block h-5' />
          </button>
        </div>
      </section>
    )
  }

  return (
    <div className='flex flex-col px-3 py-2 text-lg gap-2 rounded-lg mt-2 bg-dark-secondary text-dark-text-accent'>
      <NavLink
        to='/auth'
        className={({ isActive }) =>
          isActive
            ? 'px-3 py-2 text-lg rounded-sm bg-light-secondary dark:bg-dark-secondary w-full'
            : 'px-3 py-2 text-lg rounded-sm hover:bg-light-secondary dark:hover:bg-dark-secondary w-full'}
      >
        iniciar sesion
        <UilSignin className=' ml-2 inline-block h-5' />
      </NavLink>
    </div>
  )
}

export const Drawmenu = () => {
  const { drawMenuIsOpen } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const handleDropMenu = () => {
    dispatch(dropMenuAction())
  }

  return (
    <nav
      className={`fixed right-0 top-16 bottom-0 shadow-md z-50 ${
        drawMenuIsOpen && 'backdrop-blur-sm w-full cursor-pointer'
      }`}
      onClick={handleDropMenu}
    >
      <ul
        style={{
          transform: drawMenuIsOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
        className='transition duration-300 border-l border-dark-text-primary/25 ease-in-out transform flex flex-col w-72 p-4 right-0 justify-between h-full absolute bg-light-primary text-light-text-secondary dark:text-dark-text-secondary dark:bg-dark-primary'
      >
        <div className='flex flex-col'>
          {NAVBAR_ROUTES.map((val) => (
            <NavLink
              key={val.name}
              to={val.to}
              className={({ isActive }) =>
                isActive
                  ? 'px-3 py-2 mt-2 text-lg font-medium rounded-sm bg-light-secondary dark:bg-dark-secondary'
                  : 'px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-light-secondary dark:hover:bg-dark-secondary'}
            >
              {val.name}
            </NavLink>
          ))}
        </div>
        <AuthState />
      </ul>
    </nav>
  )
}
