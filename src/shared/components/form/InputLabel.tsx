import { FieldError } from './FieldError'

export const InputLabel = ({
  label,
  type = 'text',
  name,
  placeholder,
  register,
  errors
}) => {
  return (
    <div className='space-y-2 w-full'>
      <label className='px-1 text-sm'>{label}</label>
      <input
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        className='font-medium placeholder:font-normal border-dark-text-primary border-2'
      />
      {errors[name] && <FieldError error={errors[name].message} />}
    </div>
  )
}
