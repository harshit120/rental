import React from 'react'
import Book from '../images/banners/book-banner.png'
const Contact = () => {
  return (
    <div className='mb-12'>
        <img src={Book} alt=""  className=' h-56 opacity-90  '/>
        <p className='text-white text-center text-3xl font-bold relative bottom-32 z-50 '>Book a car by getting in touch with us <span>(123)-456-789</span></p>
    </div>
  )
}

export default Contact