import React, { useState } from 'react'
import { Modal } from '../Modal'

export const NormaModal = () => {
  const [first, setfirst] = useState(true)

  return (
    <Modal open>
      <div className='mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8'>
        <div className='lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24'>
          <div className='flex items-center'>
            <button
              // onclick='goPrev()'
              aria-label='slide back'
              className='focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100'
            >
              <svg
                className='w-10 h-10 lg:w-16 lg:h-16'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M40 16L24 32L40 48'
                  stroke='#1F2937'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div>
          <div className='slider'>
            <div className='slide-ana lg:relative'>
              <div className='flex'>
                <img
                  src='https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png'
                  alt='A black chair with wooden legs'
                  className='w-full h-full'
                />
              </div>
              <div className='flex'>
                <img
                  src='https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png'
                  alt='A black chair with wooden legs'
                  className='w-full h-full'
                />
              </div>
              <div className='flex'>
                <img
                  src='https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png'
                  alt='A black chair with wooden legs'
                  className='w-full h-full'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <button
              // onclick='goNext()'
              aria-label='slide forward'
              className='focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100'
            >
              <svg
                className='w-10 h-10 lg:w-16 lg:h-16'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M24 16L40 32L24 48'
                  stroke='#1F2937'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0'>
          <h1 className='text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white'>
            Bar Stool
          </h1>
          <p className='text-base leading-normal text-gray-600 dark:text-white mt-2'>
            You don't just want to be comfortable sitting in a bar stool—you
            want to be comfortable shimmying it up to the bar, closer to your
            lover, or back slightly to include a third person in the
            conversation.
          </p>
          <div className='flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16'>
            <button className='w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200'>
              Add to Cart
            </button>
            <button className='w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white dark:text-white focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 '>
              View Details
            </button>
          </div>
          <div className='mt-6'>
            <button className='text-xl underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800'>
              add to wishlist
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
