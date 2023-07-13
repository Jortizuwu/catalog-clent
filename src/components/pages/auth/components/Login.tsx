import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema, useLoginDefaultValues } from './utils/login'
import { InputLabel } from '../../../../shared/components/form/InputLabel'

export const Login = ({ handelChange, back }) => {
  const {
    formValues: { defaultValues },
    isLoading,
    submit
  } = useLoginDefaultValues()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
    initialValues: defaultValues,
    resolver: yupResolver(schema)
  })

  if (isLoading) <h1>Loading...</h1>

  return (
    <main className='flex gap-x-20 h-[90vh] py-2 justify-center'>
      <div className='hidden lg:flex flex-col justify-between bg-dark-text-primary lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
        <div className='flex items-center justify-start space-x-3'>
          <span className='bg-black rounded-full w-8 h-8' />
          <div className='font-medium text-xl'>Brand</div>
        </div>
        <div className='space-y-5'>
          <h1 className='lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold'>
            Enter your account and discover new experiences
          </h1>
        </div>
        <p className='font-medium'>© 2022 catalog</p>
      </div>

      <section className='flex justify-center items-center flex-col space-y-4'>
        <form onSubmit={handleSubmit(submit)} className='space-y-3'>
          <div className='flex flex-col space-y-2 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Sign in to account
            </h2>
          </div>
          <div className='flex flex-col max-w-md space-y-5'>
            <InputLabel
              label='Correo electrónico'
              name='email'
              placeholder='example@example.com'
              key='email'
              type='email'
              register={register}
              errors={errors}
            />
            <InputLabel
              label='Contraseña'
              name='clave'
              placeholder='***********'
              key='clave'
              type='password'
              register={register}
              errors={errors}
            />
            <button
              onClick={back}
              type='button'
              className='mb-3 text-left text-xs font-semibold hover:underline'
            >
              ¿Olvidaste tu password?
              <span className='ml-2 text-xs font-semibold text-dark-text-accent'>
                recuperar
              </span>
            </button>
            <button className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-text-accent transition-all focus:ring-2 ring-dark border-dark-text-primary hover:shadow-md hover:shadow-dark-text-accent text-white font-bold'>
              Login
            </button>
            <button
              onClick={handelChange}
              type='button'
              className='text-right mb-3 text-xs font-semibold hover:underline'
            >
              ¿No tienes cuenta?
              <span className='ml-2 text-xs font-semibold text-dark-text-accent'>
                Únete
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
        </form>
      </section>
    </main>
  )
}
