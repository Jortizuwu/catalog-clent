import React from 'react'

export const Divide = ({ title = '', img = '', description = '' }) => {
  return (
    <section className='border-y relative w-full pt-10 pb-16 lg:pt-16 lg:pb-20'>
      <div className='md:grid md:grid-cols-2 md:gap-x-5 grid-rows-2 md:grid-rows-1 md:my-4  divide-y-[6px] md:divide-y-0 md:divide-x-[6px] divide-dark-text-primary'>
        <div className=' md:col-span-1'>
          <img src={img} className='w-full h-[250px] object-cover' />
        </div>
        <div className='md:col-span-1 h-full relative md:pl-5'>
          <h5 className='capitalize text-xl md:text-2xl lg:text-3xl'>
            {title}
          </h5>
          <p className='text-sm lg:text-base mt-2 lg:mt-6'>{description}</p>
          <span className='text-dark-text-accent mt-2 text-sm'>
            Descubre proyectos
          </span>
        </div>
      </div>
    </section>
  )
}
