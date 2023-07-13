import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Files from 'react-files'
import { UilImagePlus, UilTimes } from '@iconscout/react-unicons'
import { FieldError } from '../../../../shared/components/form/FieldError'
// import { InputLabel } from '../../../shared/components/form/InputLabel'

import { schema, updateProfileDefaultValues } from './utils/updateProfile'
import { Loader } from '../../../../shared/components/Loader'

const Images = React.forwardRef(({ control, handleUploadImg }, ref) => {
  const [imgs, setImgs] = useState([])

  const onFilesChange = (files) => {
    setImgs(files)
  }

  if (imgs.length > 0) {
    return (
      <div className='relative  w-36 h-36 cursor-pointer rounded-full p-1'>
        <button
          className='rounded-full absolute right-2 top-2 bg-red-400 h-8 w-8'
          type='button'
          //   onClick={handleUploadImg}
        >
          <UilTimes
            height='20px'
            className='inline-flex text-light-text-secondary dark:text-dark-text-secondary'
          />
        </button>
        <div className='w-36 h-36'>
          <img
            className='bg-cover object-cover bg-center bg-no-repeat rounded-full h-full w-full'
            src={imgs[0].preview.url}
            alt=''
          />
        </div>
      </div>
    )
  }

  return (
    <Controller
      control={control}
      name='imagen_perfil'
      render={({ field: { onChange, ...rest } }) => (
        <Files
          {...rest}
          ref={ref}
          onChange={(files) => {
            onChange(files)
            onFilesChange(files)
          }}
          multiple={false}
          className='files-dropzone'
          accepts={['image/*']}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          <div className='ring-1 cursor-pointer ring-dark-text-primary rounded-md p-3'>
            <div className='border-dashed relative border-2 rounded-md w-full h-auto hover:bg-dark-secondary border-dark-text-accent p-10 text-center'>
              <button
                className='rounded-full absolute right-2 top-2 bg-red-400 h-8 w-8'
                onClick={handleUploadImg}
              >
                <UilTimes
                  height='20px'
                  className='inline-flex text-light-text-secondary dark:text-dark-text-secondary'
                />
              </button>
              <UilImagePlus className='inline-flex' />
              <p className='m-0'>Drag your files here or click in this area.</p>
            </div>
          </div>
        </Files>
      )}
    />
  )
})

export const UpdateProfile = () => {
  const {
    formValues: { defaultValues },
    isLoading,
    submit
  } = updateProfileDefaultValues()

  const {
    // register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    mode: 'all',
    initialValues: defaultValues,
    resolver: yupResolver(schema)
  })

  if (isLoading) <Loader />

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='mx-auto w-3/4 space-y-4 shadow-lg bg-dark-secondary p-4 rounded-md'
    >
      <div className='pt-4'>
        <label className='mb-5 block text-xl font-semibold '>
          Upload profile
        </label>
      </div>
      <div className='w-full flex items-center justify-center'>
        <Images control={control} />
      </div>
      {errors.imagen_perfil && (
        <FieldError error={errors.imagen_perfil.message} />
      )}
      {/*
      <section className='space-y-3'>
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
          label='Teléfono'
          name='telefono'
          placeholder='1234567898'
          key='telefono'
          type='text'
          register={register}
          errors={errors}
        />
      </section> */}
      <button className='text-dark-primary flex w-full items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-text-accent transition-all focus:ring-2 border-dark-text-primary hover:shadow-md hover:shadow-dark-text-accent  font-bold'>
        Registro
      </button>
    </form>
  )
}
