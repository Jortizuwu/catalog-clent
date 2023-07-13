import React from 'react'

import { CreatePublicationFrom } from './CreatePublication'

import { useGetPublications } from '../../../../shared/hooks/react-query/publications'
import { PublicationNormalCard } from '../../../../shared/components/publication/NormalCard'
import { CreatePublicationCard } from '../../../../shared/components/publication/CreatePublicationCard'

export const Center = () => {
  const { isLoading, publications } = useGetPublications()

  if (isLoading) return <h1>loading...</h1>

  return (
    <section className='h-auto w-full md:basis-1/2 space-y-2 md:space-y-4'>
      <CreatePublicationCard />
      <main className='space-y-4 mt-4 gap-4 flex justify-center flex-col items-center'>
        {publications?.map((val, idx) => (
          <PublicationNormalCard data={val} key={idx} />
        ))}
      </main>
      <CreatePublicationFrom />
    </section>
  )
}
