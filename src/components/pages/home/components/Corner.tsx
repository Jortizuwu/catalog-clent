import React from 'react'

const Card = () => {
  return (
    <div className='p-4 border dark:border-dark-text-secondary transition-shadow bg-light-secondary dark:bg-dark-secondary hover:shadow-xl dark:hover:shadow-dark-secondary cursor-pointer'>
      <div className='space-y-2'>
        <h5 className='capitalize text-sm md:text-base truncate'>
          Recursos para creadores de Kickstarter
        </h5>
        <p className='text-xs text-justify'>
          Nuestro compendio final de todo, desde la planificación del envío
          hasta la comunicación con los patrocinadores.
        </p>
        <button className='text-dark-text-accent p-2 text-xs bg-primary block rounded-lg'>
          Leer más
        </button>
      </div>
      <img
        src='https://th.bing.com/th/id/OIP.zBBUnvP8SAnxSs0YAJMDGQHaE7?pid=ImgDet&rs=1'
        alt=''
      />
    </div>
  )
}

export const Corner = () => {
  return (
    <section className='relative border-b dark:border-dark-secondary'>
      <div className='py-4 md:py-10'>
        <h3 className='font-semibold text-xs uppercase'>
          Publicaciones de empleo mas vistas
        </h3>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-4'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}
