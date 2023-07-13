import React from 'react'

export const PublicityCard = () => {
  return (
    <div className='hover:underline hover:text-dark-text-accent overflow-auto h-auto overflow-y-croll cursor-pointer'>
      <div className='px-1 py-2'>
        <h5 className='font-normal text-xs'>
          Noteworthy technology acquisitions 2021
        </h5>
      </div>
      <img
        loading='lazy'
        className='w-full h-24 object-cover rounded-lg'
        src='https://th.bing.com/th/id/R.01ef4ed0218d8b3e42a3d86d8e6f413f?rik=kiJueEiWqQncwA&pid=ImgRaw&r=0'
        alt=''
      />
      <p className='font-light text-xs mt-1'>
        Here are the biggest enterprise technology
      </p>
    </div>
  )
}
