import React from 'react'
import Popup from 'reactjs-popup'
import { UilEllipsisH } from '@iconscout/react-unicons'

export const PopupComponent = ({ children, handelOpen }) => {
  return (
    <Popup
      trigger={
        <button
          type='button'
          onClick={handelOpen}
          className='text-center right-2 top-1 absolute p-0.5 dark:hover:bg-dark-primary hover:bg-light-secondary rounded-full'
        >
          <UilEllipsisH />
        </button>
      }
      className='rounded-md'
      position='bottom right'
    >
      {children}
    </Popup>
  )
}
