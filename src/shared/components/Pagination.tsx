import React from 'react'
import { UilPrevious, UilStepForward } from '@iconscout/react-unicons'

export const Pagination = () => {
  return (
    <div className='text-dark-text-accent'>
      <ul className='inline-flex space-x-5'>
        <li>
          <button className='flex items-center justify-center transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-light-secondary dark:bg-dark-primary dark:hover:bg-dark-secondary'>
            <UilPrevious />
          </button>
        </li>
        <li>
          <button className='transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100'>
            1
          </button>
        </li>
        <li>
          <button className=' transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100'>
            2
          </button>
        </li>
        <li>
          <button className=' transition-colors duration-150 border-b border-dark-text-primary focus:shadow-outline'>
            3
          </button>
        </li>
        <li>
          <button className='flex items-center justify-center transition-colors duration-150 hover:bg-light-secondary dark:bg-dark-primary rounded-full focus:shadow-outline dark:hover:bg-dark-secondary'>
            <UilStepForward />
          </button>
        </li>
      </ul>
    </div>
  )
}
