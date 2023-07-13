import React from 'react'
import { PublicityCard } from './PublicityCard'

export const Publicity = () => {
  return (
    <section className='sticky top-20 flex flex-col overflow-y-scroll scrollbar'>
      <div className='w-full gap-3'>
        <PublicityCard />
        <PublicityCard />
        <PublicityCard />
      </div>
    </section>
  )
}
