import React, { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UilSearch, UilBars, UilSun, UilMoon } from '@iconscout/react-unicons'

import logo from '../../../../assets/logo.png'

import { useDarkMode } from '../../../../shared/hooks/useDarkMode'
import { useDispatch, useSelector } from 'react-redux'
import { dropMenuAction } from '../../../../redux/features/ui/uiSlice'

export const Navbar = () => {
  const navbarRef = useRef(null)
  const { userInfo } = useSelector((state) => state.auth)
  const [darkTheme, setDarkTheme] = useDarkMode()
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(dropMenuAction(false))
  }, [location])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       navbarRef.current.classList.add('fixed')
  //       navbarRef.current.classList.add('backdrop-blur-md')
  //       navbarRef.current.classList.add('backdrop-filter')
  //       navbarRef.current.classList.remove('relative')
  //     } else {
  //       navbarRef.current.classList.remove('fixed')
  //       navbarRef.current.classList.remove('bg-black')
  //       navbarRef.current.classList.add('relative')
  //     }
  //   }
  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }
  // }, [window.scrollY])

  const handleMode = () => {
    setDarkTheme(!darkTheme)
  }

  const handleDropMenu = () => {
    dispatch(dropMenuAction())
  }
  // bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100
  return (
    <nav
      ref={navbarRef}
      className=' backdrop-blur-md fixed  text-light-text-secondary dark:text-dark-text-secondary dark:bg-dark-primary/60 bg-white/60 w-full z-50 flex justify-between items-center mx-auto px-5 md:px-12 h-16 dark:border-dark-secondary border-b text-sm'
    >
      <section className='hidden md:block'>
        <ul className='inline-flex'>
          <li>
            <NavLink to='/' className='hover:text-blue-300'>
              Nosotros
            </NavLink>
          </li>
        </ul>
      </section>

      <section className='flex-shrink flex-grow-0 justify-start md:ml-16'>
        <div className='inline-block'>
          <NavLink className='text-2xl' to='/'>
            <img
              src={logo}
              className='h-[50px] rounded-lg md:ml-[130px] object-cover w-[150px]'
              alt='catalog'
            />
          </NavLink>
        </div>
      </section>

      <section className='flex-initial'>
        <div className='flex justify-end items-center relative'>
          <ul className='flex items-center space-x-2'>
            <li>
              <NavLink to='/' className='hover:text-blue-300'>
                <span className='hidden md:inline-block'>Buscar</span>
                <UilSearch className='ml-1 inline-block h-[15px]' />
              </NavLink>
            </li>
            {userInfo
              ? (
                <li className='hidden  md:block'>
                  <NavLink
                    to={`/profile?id=${userInfo.id_usuario}`}
                    className='hover:text-blue-300'
                  >
                    Perfil
                  </NavLink>
                </li>
                )
              : (
                <li className='hidden  md:block'>
                  <NavLink to='auth' className='hover:text-blue-300'>
                    Iniciar sesión
                  </NavLink>
                </li>
                )}
          </ul>
          <ul className='flex'>
            <li>
              <button
                onClick={handleMode}
                className='ml-2 p-2 hover:bg-light-secondary dark:hover:bg-dark-secondary rounded-full'
              >
                {!darkTheme
                  ? (
                    <UilSun color='rgb(250 204 21)' size={20} />
                    )
                  : (
                    <UilMoon color='rgb(150 104 121)' size={20} />
                    )}
              </button>
            </li>
            <li>
              <button
                onClick={handleDropMenu}
                className='p-2 hover:bg-light-secondary dark:hover:bg-dark-secondary rounded-full'
              >
                <UilBars />
              </button>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  )
}
