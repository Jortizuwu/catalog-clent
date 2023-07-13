import ModalComponent from 'react-modal'
import { UilTimes } from '@iconscout/react-unicons'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderColor: '#ffb9fa',
    // boxShadow:
    //   '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: 0
  }
}

ModalComponent.setAppElement('#root')

export const Modal = ({ children, reference, open, handelModal, title }) => {
  return (
    <ModalComponent
      ref={reference}
      isOpen={open}
      onRequestClose={handelModal}
      style={customStyles}
      closeTimeoutMS={200}
      overlayClassName='modal-fondo'
    >
      <div className='flex p-[20px] max-h-[700px] max-w-[500px] flex-col space-y-2 divide-y divide-dark-text-secondary/20 dark:bg-dark-primary dark:text-dark-text-secondary bg-light-primary text-light-text-secondary'>
        <div className='flex justify-between h-full'>
          <h2 className='text-xl inline-flex self-center font-semibold'>
            {title}
          </h2>
          <button
            className='rounded-full items-end  bg-light-secondary dark:bg-dark-secondary h-10 w-10'
            onClick={handelModal}
          >
            <UilTimes className='inline-flex text-light-text-secondary dark:text-dark-text-secondary' />
          </button>
        </div>
        <section className='pt-2'>{children}</section>
      </div>
    </ModalComponent>
  )
}
