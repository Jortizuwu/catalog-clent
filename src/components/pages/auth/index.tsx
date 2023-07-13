import React, { useState } from 'react'
import { ForgotPassword } from './components/ForgotPassword'
import { Login } from './components/Login'
import { Register } from './components/Register'

const Auth = () => {
  const [open, setOpen] = useState(true)
  const [openForgot, setOpenForgot] = useState(false)

  const handleChange = () => {
    setOpen((currentValue) => (currentValue = !currentValue))
  }

  const back = () => {
    setOpenForgot((currentValue) => (currentValue = !currentValue))
  }

  if (openForgot) {
    return (
      <div className='dark:bg-dark-primary dark:text-dark-text-secondary'>
        <ForgotPassword back={back} />
      </div>
    )
  }

  return (
    <div className='dark:bg-dark-primary dark:text-dark-text-secondary'>
      {open
        ? (
          <Login handelChange={handleChange} back={back} />
          )
        : (
          <Register handleChange={handleChange} />
          )}
    </div>
  )
}

export default Auth
