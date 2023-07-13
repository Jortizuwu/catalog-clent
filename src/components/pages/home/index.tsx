import React from 'react'

import { Slider } from '../../../shared/components/Slider'
import { Corner } from './components/Corner'
import { Header } from './components/Header'
import { LastHours } from './components/LastHours'
import { Outstanding } from './components/Outstanding'
import { Partners } from './components/Partners'

const Home = () => {
  return (
    <main className='mt-3 md:mt-10 w-full bg-light-primary dark:bg-dark-primary text-light-text-secondary dark:text-dark-text-secondary'>
      <Header />
      {/* <Slider /> */}
      <Outstanding />
      {/* <Divide
        title='Proyectos pequeños con recompensas especiales'
        description='Make 100 es nuestra convocatoria anual de campañas limitadas
            exactamente a 100 recompensas. El objetivo es motivar a los
            creadores a asumir riesgos, pensar en grande y crear en pequeño,
            además de que se diviertan con los primeros proyectos del año.
            Descubre nuevas ideas para llevar a la práctica y disfrutar las
            recompensas.'
        img='https://th.bing.com/th/id/OIP.6rzd1wky_6gG7ljNLWFX-wHaC9?pid=ImgDet&rs=1'
      /> */}
      <LastHours />
      <Corner />
      <Partners />
    </main>
  )
}

export default Home
