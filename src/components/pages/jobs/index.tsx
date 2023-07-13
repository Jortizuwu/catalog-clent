import React from 'react'
import { Publicity } from '../../../shared/components/publicity/Publicity'
import { Sidebar } from '../../../shared/components/Sidebar'
import { Center } from './components/Center'

const Jobs = () => {
  return (
    <div className='flex justify-center relative dark:bg-dark-primary bg-light-primary dark:text-dark-text-secondary text-light-text-secondary'>
      <div className='flex w-full gap-4 md:justify-between max-w-screen-xl'>
        <section className='hidden md:block sm:basis-1/4'>
          <Sidebar />
        </section>
        <Center />
        <div className='hidden md:flex sm:basis-1/4 relative flex-col flex-shrink-0 w-1/4 '>
          <Publicity />
        </div>
      </div>
    </div>
  )
}

export default Jobs
