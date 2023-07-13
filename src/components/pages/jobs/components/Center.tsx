import React from 'react'
import { JobCard } from '../../../../shared/components/JobCard'

const Card = () => {
  return (
    <div className='p-2 md:p-5 dark:border-dark-text-secondary transition-shadow bg-light-secondary dark:bg-dark-secondary rounded-md'>
      <div className='flex justify-between items-center'>
        <img
          className='w-12 h-12 rounded-full object-cover mr-4 shadow'
          src='https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939'
        />
        <small className='text-sm'>22h ago</small>
      </div>
      <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0 md:ml-20'>
        <h2 className='text-xl md:text-2xl title-font font-bold mb-2'>
          The Caffeine Code
        </h2>
        <p className='leading-relaxed text-xs md:text-base'>
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <div className='w-full text-xs justify-center md:justify-start md:text-base flex flex-wrap space-x-3 mt-2'>
          <div className=''>
            <h2 className='uppercase font-bold'>Empresa</h2>
            <p>description</p>
          </div>
          <div className=''>
            <h2 className='uppercase font-bold'>Modalidad</h2>
            <p>description</p>
          </div>
          <div className=''>
            <h2 className='uppercase font-bold'>Lugar</h2>
            <p>description</p>
          </div>
        </div>
        <a className='mt-3 text-indigo-500 inline-flex items-center'>
          Learn More
        </a>
      </div>
    </div>
  )
}

export const Center = () => {
  return (
    <section className='h-auto w-full md:basis-1/2 space-y-2 md:space-y-4'>
      <section className='w-full border flex flex-col gap-2 border-light-secondary dark:border-dark-secondary hover:shadow-md rounded-lg p-2'>
        hola
      </section>
      <main className=' space-y-4'>
        <section className='space-y-3'>
          <h3 className='font-semibold text-xs uppercase'>nuevos favoritos</h3>
          <section className='grid lg:grid-cols-2 gap-5'>
            <JobCard />
            <JobCard />
          </section>
        </section>
        <section className='space-y-3'>
          <h3 className='font-semibold text-xs uppercase '>nuevos favoritos</h3>
          <section className='grid sm:grid-cols-2 md:grid-cols-1 gap-5'>
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </section>
      </main>
    </section>
  )
}
