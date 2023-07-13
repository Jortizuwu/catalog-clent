import React from 'react'
import page1 from '../../../../assets/page1.svg'

import { UilSearch } from '@iconscout/react-unicons'

export const Header = () => {
  return (
    <section className='relative'>
      <div className='absolute -z-0 w-full h-screen opacity-10'>
        <img src={page1} className='w-auto fill-dark-text-primary' alt='' />
      </div>
      <section className='text-center mt-5 md:mt-7 lg:mt-10'>
        <div className='w-full grid md:grid-cols-3 mt-3 divide-y dark:divide-dark-secondary md:divide-y-0 md:divide-x '>
          <div className='px-4 py-7'>
            <span className='text-2xl md:text-3xl lg:text-4xl text-dark-text-accent'>
              233
            </span>
            <p className='text-xs lg:text-sm'>Empleos conseguidos</p>
          </div>
          <div className=' px-4 py-7'>
            <span className='text-2xl md:text-3xl lg:text-4xl text-dark-text-accent'>
              #
            </span>
            <p className='text-xs lg:text-sm '>
              Proyectos y emprendimientos apoyados
            </p>
          </div>
          <div className=' px-4 py-7'>
            <span className='text-2xl md:text-3xl lg:text-4xl text-dark-text-accent'>
              #
            </span>
            <p className='text-xs lg:text-sm '>Cursos en linea</p>
          </div>
        </div>

        <section className='text-center md:mt-10'>
          <h1 className='text-lg md:text-xl lg:text-2xl mb-4 md:mb-10'>
            Busca algún proyecto, empleo o curso que te llame la atención
          </h1>
          <div className='max-w-2xl mx-auto'>
            <div className='relative flex flex-row-reverse'>
              <input
                type='search'
                className='shadow-md'
                placeholder='Search...'
                required
              />
              <div className='flex absolute inset-y-0 right-5 items-center pointer-events-none'>
                <UilSearch className='text-dark-text-accent' />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
