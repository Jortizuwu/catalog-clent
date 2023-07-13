import React, { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { UilArrowUp, UilPlus } from '@iconscout/react-unicons'
import { Toaster } from 'react-hot-toast'

import { useScroll } from '../../../shared/hooks/useScroll'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { handelCreatePublicationModal } from '../../../redux/features/ui/uiSlice'
import { Drawmenu } from './components/Drawmenu'

const RestScreen = () => {
  const { pathname } = useLocation()
  const buttonRefTop = useRef(null)
  const buttonRefAdd = useRef(null)
  const dispatch = useDispatch()
  const { createPublicationIsOpen, drawMenuIsOpen } = useSelector((state) => state.ui)

  const scrollY = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 100) {
        buttonRefTop.current.classList.remove('hidden')
        if (buttonRefAdd.current) {
          buttonRefAdd.current.classList.remove('hidden')
        }
      } else {
        buttonRefTop.current.classList.add('hidden')
        if (buttonRefAdd.current) buttonRefAdd.current.classList.add('hidden')
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  useEffect(() => {
    const openPublication = () => {
      if (createPublicationIsOpen || drawMenuIsOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
    openPublication()
  }, [createPublicationIsOpen, drawMenuIsOpen])

  const handleClick = () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className=''>
      <button
        onClick={handleClick}
        ref={buttonRefTop}
        className='fixed hidden transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12  z-50 right-2 md:right-10 bottom-2 h-12 w-12 rounded-full bg-dark-text-accent hover:text-white border border-dark-text-accent'
      >
        <UilArrowUp className='mx-auto' />
      </button>
      {pathname.includes('app') && (
        <button
          onClick={() => {
            dispatch(handelCreatePublicationModal())
          }}
          ref={buttonRefAdd}
          className='fixed hidden transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12  z-50 right-16 md:right-24 bottom-2 h-12 w-12 rounded-full bg-dark-text-accent hover:text-white border border-dark-text-accent'
        >
          <UilPlus className='mx-auto' />
        </button>
      )}
    </div>
  )
}

const Layout = () => {
  const { pathname } = useLocation()

  return (
    <div className='relative bg-light-primary dark:bg-dark-primary'>
      <Navbar />
      <section className='relative bg-light-primary dark:bg-dark-primary max-w-screen-xl container px-2 md:px-10 pt-20 mx-auto'>
        <Outlet />
      </section>
      {!pathname.includes('app') && <Footer />}
      <RestScreen />
      <Toaster />
      <Drawmenu />
    </div>
  )
}

export default Layout
