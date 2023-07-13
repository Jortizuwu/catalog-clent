import React, { useRef } from 'react'
import SliderComponent from 'react-slick'
import img from '../../assets/nanahira2.png'
import { UilPrevious, UilStepForward } from '@iconscout/react-unicons'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const Card = () => {
  return (
    <div className='bg-light-secondary text-light-text-secondary dark:bg-dark-secondary dark:text-dark-text-secondary hover:underline hover:text-dark-text-accent cursor-pointer'>
      <section className='px-1 flex gap-2 py-2'>
        <img src={img} className='rounded-full h-10 w-10 object-cover' alt='' />
        <div className=''>
          <h5 className='text-xs'>Noteworthy technology acquisitions 2021</h5>
          <span className='text-[10px] capitalize' href='#'>
            por no reply press
          </span>
        </div>
      </section>
      <div className=''>
        <img className='w-full' src={img} alt='' />
      </div>
      <p className='p-2 hover:no-underline text-xs mb-3'>
        Here are the biggest enterprise technology
      </p>
    </div>
  )
}

export const Slider = () => {
  const slider = useRef(null)

  return (
    <section className='relative pt-10 md:pt-16 '>
      <div className='flex justify-between'>
        <h3 className='font-semibold text-xs uppercase'>nuevos favoritos</h3>
        <div className='flex space-x-4 mb-2'>
          <button
            onClick={() => slider?.current?.slickPrev()}
            className='flex items-center justify-center text-dark-text-dark-text-accent transition-colors duration-150 dark:bg-dark-secondary bg-light-primary rounded-full border border-transparent focus:shadow-outline hover:border-dark-text-primary'
          >
            <UilPrevious />
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className='flex items-center justify-center text-dark-text-dark-text-accent transition-colors duration-150 dark:bg-dark-secondary bg-light-primary rounded-full border border-transparent focus:shadow-outline hover:border-dark-text-primary'
          >
            <UilStepForward />
          </button>
        </div>
      </div>
      <SliderComponent ref={slider} {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SliderComponent>
    </section>
  )
}
