import React from 'react'
import img from '../../../../assets/logo.png'

import { Pagination } from '../../../../shared/components/Pagination'

const Card = () => {
  return (
    <div className='grid-cols-3 py-4 hover:scale-110 hover:cursor-pointer transition-all'>
      <div className='col-span-1'>
        <img
          src='https://th.bing.com/th/id/R.6debdf00bc30063942d63f0503d54351?rik=cPyFKRUqSLyz%2bg&riu=http%3a%2f%2fmisiontokyo.com%2fwp-content%2fuploads%2f2019%2f12%2fYour-lie-p.jpg&ehk=C7%2fZivZCFzFQ8NkxrbutIW%2foqrss4hVIX%2b5eJ7y%2foAU%3d&risl=&pid=ImgRaw&r=0'
          className='w-full h-28 object-cover'
        />
      </div>
      <div className='col-span-2 h-full flex space-y-2 flex-col'>
        <h5 className='capitalize font-semibold text-sm'>
          Dreadstar vs. The Inevitable
        </h5>
        <p className='text-xs'>Por username</p>
      </div>
    </div>
  )
}

export const Outstanding = () => {
  return (
    <section className='grid md:grid-cols-5 md:grid-rows-1 divide-y dark:divide-dark-secondary md:divide-y-0 md:divide-x md:mt-4 md:py-4 relative'>
      <div className='md:pr-10 lg:pr-16 py-4 md:py-10 md:col-span-3 '>
        <h3 className='font-semibold text-xs uppercase md:mb-3'>
          Cursos disponibles
        </h3>
        <section className='hover:text-dark-text-accent cursor-pointer'>
          <div className='mt-4 hover:underline'>
            <section className='my-3'>
              <h5 className='font-normal text-2xl tracking-tight '>
                Noteworthy technology acquisitions 2021
              </h5>
              <span>user name</span>
            </section>
            <img className='w-full' src={img} alt='' />
          </div>
          <p className='font-normal md:mb-3'>
            Here are the biggest enterprise technology
          </p>
          <span className='text-xs capitalize' href='#'>
            por no reply press
          </span>
        </section>
      </div>
      <div className='md:pl-10 lg:pl-16 py-5 md:py-10 md:col-span-2'>
        <h3 className='font-semibold text-xs  uppercase'>mas cursos</h3>
        <section className='flex mb-3 flex-col justify-between divide-y dark:divide-dark-secondary'>
          <Card />
          <Card />
        </section>
        <section className='w-full flex justify-end mt-5 md:mt-10'>
          <Pagination />
        </section>
      </div>
    </section>
  )
}
