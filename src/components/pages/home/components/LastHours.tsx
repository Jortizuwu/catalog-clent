import React from 'react'

import img from '../../../../assets/logo.png'

export const Card = () => {
  return (
    <div className='cursor-pointer hover:underline dark:bg-dark-secondary hover:text-dark-text-accent'>
      <div className=''>
        <img
          className='w-full h-[200px] md:h-[400px] object-cover'
          src={img}
          alt=''
        />
      </div>
      <section className='p-2'>
        <h5 className='font-normal text-sm md:text-base tracking-tight my-3'>
          Noteworthy technology acquisitions 2021
        </h5>
        <p className='font-normal text-xs md:text-sm mb-3'>
          Here are the biggest enterprise technology
        </p>
        <span className='text-xs text-dark-text-accent capitalize' href='#'>
          read more
        </span>
      </section>
    </div>
  )
}

export const LastHours = () => {
  return (
    <section className='relative'>
      <div className='py-4 md:py-10 col-span-3'>
        <h3 className='font-semibold text-xs uppercase mb-3'>ULTIMA HORA</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* <div className='border-[1px] w-screen absolute -right-5 md:-right-12 bottom-0' /> */}
    </section>
  )
}
