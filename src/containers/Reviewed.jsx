import React from 'react'
import Harry from '../images/testimonials/pfp1.jpg'
const Reviewed = () => {
  return (
    <div className='my-32'>
        <div className='mx-[400px] text-center '>
            <p className='text-2xl font-semibold'>Reviewed by People</p>
            <p className='text-5xl font-semibold mt-2
            '>Client's Testimonials</p>
            <p className='mt-4'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>
        <div className='flex flex-row gap-11 mx-44 mt-20'>
        <div className='w-[550px] bg-lime-400 h-[300px] px-10 py-10 '>
            <div>
                <p className='text-2xl font-semibold'>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. " </p>
                </div>
           <div className='mt-8 flex flex-row items-center gap-4'>
            <div>
            <img src={Harry} alt="" className='rounded-full w-[70px]' />
            </div>
          <div>
          <p>Parry Hotter</p>
           <p>Belgrade</p>
          </div>
           
            </div> 
           
        </div>
        <div className='w-[550px] bg-lime-400 h-[300px] px-10 py-10'>
            <div >
                <p className='text-2xl font-semibold'>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. " </p>
                </div>
           <div className='mt-8 flex flex-row items-center gap-4'>
           <img src={Harry} alt=""  className='rounded-full w-[70px]'  />
           <div>

           </div>
           <div>
           <p>Parry Hotter</p>
           <p>Belgrade</p>
           </div>
            </div>

          
        </div>
        </div>
    </div>
  )
}

export default Reviewed