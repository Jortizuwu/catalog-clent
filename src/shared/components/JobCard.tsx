export const JobCard = () => {
  return (
    <div className='p-4 border dark:border-dark-text-secondary transition-shadow bg-light-secondary dark:bg-dark-secondary hover:shadow-xl dark:hover:shadow-dark-secondary cursor-pointer'>
      <div className='space-y-2'>
        <h5 className='capitalize text-sm md:text-base'>
          Recursos para creadores de Kickstarter
        </h5>
        <div className='flex gap-4'>
          <p className='text-xs text-justify'>
            Nuestro compendio final de todo, desde la planificación del envío
            hasta la comunicación con los patrocinadores.
          </p>
          <div className='h-full w-20'>
            <img
              className='h-10 w-20'
              src='https://th.bing.com/th/id/OIP.zBBUnvP8SAnxSs0YAJMDGQHaE7?pid=ImgDet&rs=1'
              alt=''
            />
            <button className='text-dark-text-accent p-2 text-xs bg-primary block rounded-lg'>
              Leer más
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
