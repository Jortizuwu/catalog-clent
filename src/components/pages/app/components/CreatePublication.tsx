import React, { useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { UilImagePlus, UilVideo, UilTimes } from '@iconscout/react-unicons'
import Files from 'react-files'

import { Modal } from '../../../../shared/components/Modal'
import { handelCreatePublicationModal } from '../../../../redux/features/ui/uiSlice'
import {
  schema,
  useCreatePublicationDefualtValues
} from './utils/createPublication'
import { FieldError } from '../../../../shared/components/form/FieldError'

const Images = React.forwardRef(({ control, handleUploadImg }, ref) => {
  const [imgs, setImgs] = useState([])

  const onFilesChange = (files) => {
    setImgs(files)
  }

  if (imgs.length > 0) {
    return (
      <div className='ring-1 relative cursor-pointer ring-dark-text-primary rounded-md p-1'>
        <button
          className='rounded-full absolute right-2 top-2 bg-red-400 h-8 w-8'
          onClick={handleUploadImg}
        >
          <UilTimes
            height='20px'
            className='inline-flex text-light-text-secondary dark:text-dark-text-secondary'
          />
        </button>
        <img
          src={imgs[0].preview.url}
          alt=''
          className='w-full h-auto max-h-48'
        />
      </div>
    )
  }

  return (
    <Controller
      control={control}
      name='images'
      render={({ field: { onChange, ...rest } }) => (
        <Files
          {...rest}
          ref={ref}
          onChange={(files) => {
            onChange(files)
            onFilesChange(files)
          }}
          className='files-dropzone'
          accepts={['image/*']}
          multiple
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

export const CreatePublicationFrom = () => {
  const { createPublicationIsOpen } = useSelector((state) => state.ui)

  const dispatch = useDispatch()
  const ModalRef = useRef(null)

  const {
    formValues: { defaultValues },
    isLoading,
    submit
  } = useCreatePublicationDefualtValues()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    mode: 'all',
    initialValues: defaultValues,
    resolver: yupResolver(schema)
  })

  const handelModal = () => {
    dispatch(handelCreatePublicationModal())
  }

  const [addImg, setAddImg] = useState(false)

  const handleUploadImg = (e) => {
    e.stopPropagation()
    setAddImg((state) => !state)
  }

  return (
    <Modal
      reference={ModalRef}
      handelModal={handelModal}
      open={createPublicationIsOpen}
      title='Crear publicación'
    >
      <form onSubmit={handleSubmit(submit)} className='space-y-4'>
        <section className='scrollbar overflow-y-auto flex w-full flex-col gap-4'>
          <section className=''>
            <textarea
              type='text'
              {...register('description')}
              name='description'
              autoFocus
              className='resize-none text-xl placeholder:text-xl w-full dark:bg-dark-primary  rounded-md p-2 focus:outline-none'
              placeholder='Que deseas compartir hoy'
            />
            {errors?.description && (
              <FieldError error={errors.description.message} />
            )}
            {addImg && (
              <Images control={control} handleUploadImg={handleUploadImg} />
            )}
          </section>
          <div className='bg-light-secondary dark:bg-dark-secondary w-full items-center rounded-lg flex justify-between p-2'>
            <p className='text-sm'>Agregar a tu publicación</p>
            <div className='space-x-5'>
              <button
                type='button'
                onClick={handleUploadImg}
                className='p-1 hover:bg-light-primary dark:hover:bg-dark-primary rounded-full'
              >
                <UilImagePlus className='inline-flex' />
              </button>
              <button
                type='button'
                disabled
                className='p-1 hover:bg-light-primary dark:hover:bg-dark-primary rounded-full'
              >
                <UilVideo className='inline-flex' />
              </button>
            </div>
          </div>
        </section>
        <button
          type='submit'
          className='text-black w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-text-accent transition-all font-bold'
        >
          Crear
        </button>
      </form>
    </Modal>
  )
}
