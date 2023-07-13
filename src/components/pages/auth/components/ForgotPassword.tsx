import React from 'react'

export const ForgotPassword = ({ back }) => {
  return (
    <main className='py-5 flex h-[90vh] justify-center items-center flex-col space-y-4'>
      <section className='space-y-3'>
        <div className='flex flex-col space-y-2 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold'>Sign in to account</h2>
        </div>
        <div className='flex flex-col max-w-md space-y-5'>
          <div>
            <label className='px-1 text-sm'>
              Correo electrónico
            </label>
            <input
              type='text'
              placeholder='example@example.com'
              className='font-medium placeholder:font-normal border-dark-text-primary border-2'
            />
          </div>
          <button className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-text-accent transition-all focus:ring-2 border-dark-text-primary hover:shadow-lg hover:shadow-dark-text-accent text-white font-bold'>
            enviar
          </button>
          <button
            onClick={back}
            type='button'
            className='text-right mb-3 text-xs font-semibold hover:underline'
          >
            Regresar al
            <span className='ml-2 text-xs font-semibold text-dark-text-accent'>
              inicio de sesión
            </span>
          </button>
          {/* <div className='flex justify-center items-center'>
          <span className='w-full border border-black' />
          <span className='px-4'>Or</span>
          <span className='w-full border border-black' />
        </div>
        <button className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative'>
          <span>Sign in with Google</span>
        </button> */}
        </div>
      </section>
    </main>
  )
}
