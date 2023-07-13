import React from 'react'

export const Loader = () => {
  return (
    <div className='flex items-center justify-center min-h-[140px]'>
      <div
        style={{ borderTopColor: 'transparent' }}
        className='w-8 h-8 border-4 border-dark-text-primary rounded-full animate-spin'
      />
      <p className='ml-2'>cargando...</p>
    </div>
  )
}
