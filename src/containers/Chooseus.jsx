import React from 'react'
import Icon1 from '../images/chooseUs/icon1.png'
import Icon2 from '../images/chooseUs/icon2.png'
import Icon3 from '../images/chooseUs/icon3.png'


const Chooseus = () => {
  return (
    <div className='px-40'>
<div className='grid grid-cols-11  '>
    <div className=' col-span-7  pr-48  '>
        <p className='text-2xl font-semibold '>Why Choose Us</p>
        <p className='text-5xl font-bold mt-3 '>Best valued deals you will ever find</p>
        <p className='mt-3 text-zinc-400'>Discover the best deals you'll ever find with our unbeatable offers. <br />
            We're dedicated to providing you with the best value for your <br /> money,
             so you can enjoy top-quality services and products without <br /> breaking 
             the bank. Our deals are designed to give you the ultimate <br /> renting experience, 
            so don't miss out on your chance to save big.</p>
    <button className=' bg-orange-600 px-4 py-2 mt-5 text-lg font-semibold text-white'>Find Details</button>
    </div>
    <div className='col-span-4 '>
        <div className='flex flex-row  '>
            <div className=''>
                <img src={Icon1} alt="" className='w-72' />
            </div>
            <div className='ml-4'>
                <p className='text-2xl font-bold'>Cross Country Drive</p>
                <p className='mt-2'>Take your driving experience to the next level with our
                     top-notch vehicles for your cross-country adventures.</p>
            </div>
        </div>
        <div className='flex flex-row mt-6'>
            <div>
                <img src={Icon2} alt="" className='w-72' />
            </div>
            <div className='ml-4'>
                <p className='text-2xl font-bold'>All Inclusive Pricing</p>
                <p className='mt-2'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
            </div>
        </div>
        <div className='flex flex-row mt-4'>
            <div>
                <img src={Icon3} alt="" className='w-72' />
            </div>
            <div className='ml-4'>
                <p className='text-2xl font-bold'>No Hidden Charges</p>
                <p className='mt-2'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Chooseus