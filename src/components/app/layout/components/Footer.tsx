import React, { useState } from 'react'
import {
  UilFacebook,
  UilInstagram,
  UilTwitterAlt
} from '@iconscout/react-unicons'

export const Footer = () => {
  const [date] = useState(new Date())

  return (
    <section className='relative bg-light-primary text-light-text-secondary dark:bg-dark-primary dark:text-dark-text-secondary'>
      <footer className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 border-t dark:border-dark-secondary'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <img src='#' className='mr-5 h-6 sm:h-9' alt='logo' />
            <p className='max-w-xs mt-4 text-sm '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div className='flex mt-8 space-x-6 '>
              <a className='hover:opacity-75' target='_blank' rel='noreferrer'>
                <span className='sr-only'> Facebook </span>
                <UilFacebook />
              </a>
              <a className='hover:opacity-75' target='_blank' rel='noreferrer'>
                <span className='sr-only'> Instagram </span>
                <UilInstagram />
              </a>
              <a className='hover:opacity-75' target='_blank' rel='noreferrer'>
                <span className='sr-only'> Twitter </span>
                <UilTwitterAlt />
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4 dark:text-dark-text-secondary'>
            <div>
              <p className='font-medium'>Company</p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm dark:text-dark-text-secondary'>
                <a className='hover:opacity-75'> About </a>
                <a className='hover:opacity-75'> Meet the Team </a>
                <a className='hover:opacity-75'> History </a>
                <a className='hover:opacity-75'> Careers </a>
              </nav>
            </div>
            <div>
              <p className='font-medium'>Services</p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm'>
                <a className='hover:opacity-75'> 1on1 Coaching </a>
                <a className='hover:opacity-75'> Company Review </a>
                <a className='hover:opacity-75'> Accounts Review </a>
                <a className='hover:opacity-75'> HR Consulting </a>
                <a className='hover:opacity-75'> SEO Optimisation </a>
              </nav>
            </div>
            <div>
              <p className='font-medium'>Helpful Links</p>
              <nav className='flex flex-col mt-4 space-y-2 text-sm'>
                <a className='hover:opacity-75'> Contact </a>
                <a className='hover:opacity-75'> FAQs </a>
                <a className='hover:opacity-75'> Live Chat </a>
              </nav>
            </div>
          </div>
        </div>
        <p className='mt-8 text-xs'>
          © {date.getFullYear()} catalog
        </p>
      </footer>
    </section>
  )
}
