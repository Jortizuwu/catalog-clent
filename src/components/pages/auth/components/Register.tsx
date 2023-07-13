import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema, useRegisterDefaultValues } from './utils/register'
import { InputLabel } from '../../../../shared/components/form/InputLabel'

export const Register = ({ handleChange }) => {
  const {
    formValues: { defaultValues },
    isLoading,
    submit
  } = useRegisterDefaultValues()

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
    <main className='flex gap-x-20 min-h-[100vh] py-2 justify-center'>
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
        <div className='flex flex-col space-y-2 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold'>Sign in to account</h2>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className='flex flex-col max-w-md space-y-5'
        >
          <div className='flex space-x-4'>
            <InputLabel
              label='Nombre'
              name='nombre'
              placeholder='nombre'
              key='nombre'
              register={register}
              errors={errors}
            />
            <InputLabel
              label='Apellido'
              name='apellidos'
              placeholder='Apellido'
              key='apellidos'
              register={register}
              errors={errors}
            />
          </div>
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
            label='Teléfono'
            name='telefono'
            placeholder='1234567898'
            key='telefono'
            type='text'
            register={register}
            errors={errors}
          />
          <div className='flex space-x-4'>
            <InputLabel
              label='Contraseña'
              name='clave'
              placeholder='***********'
              key='clave'
              type='password'
              register={register}
              errors={errors}
            />
            <InputLabel
              label='Confirme contraseña'
              name='confirmPassword'
              placeholder='***********'
              key='confirmPassword'
              type='password'
              register={register}
              errors={errors}
            />
          </div>
          <button className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-text-accent transition-all focus:ring-2 border-dark-text-primary hover:shadow-md hover:shadow-dark-text-accent text-white font-bold'>
            Registro
          </button>
          <button
            onClick={handleChange}
            type='button'
            className='text-right mb-3 text-xs font-semibold hover:underline'
          >
            ¿Ya tienes una cuenta?
            <span className='text-xs font-semibold text-dark-text-accent ml-3'>
              Inicia sesión
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
        </form>
      </section>
    </main>
  )
}
