import React from 'react'
import Person from '../images/about/about-main.jpg'
import Icon1 from '../images/about/icon1.png'
import Icon2 from '../images/about/icon2.png'
import Icon3 from '../images/about/icon3.png'


const Aboutcompany = () => {
  return (
    <div className='grid grid-cols-2 mx-72 mt-96 gap-16 mb-16'>

        <div>
            <img src={Person} alt=""  className='w-[400px]'/>
        </div>
        <div className='-mt-10'>
            <p className='text-2xl font-semibold'>About Company</p>
            <p className='text-4xl font-bold leading-10'>You start the engine and your adventure begins</p>
            <p className='mt-5'>Certain but she but shyness why cottage.
                 Guy the put instrument sir entreaties affronting.
                  Pretended exquisite see cordially the you.
                   Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution.
                 My indulged as disposal strongly attended.</p>

                 <div className='grid grid-cols-3 gap-12 mt-7'>
                 <div>
    <img src={Icon1} alt="" className='mb-3'/>
    <div className='flex flex-row gap-2'>
    <p className='text-4xl font-black  mt-4'>20 </p>
    <span className='text-lg' >car <br /> Types</span>
    </div>
</div>
<div>
    <img src={Icon2} alt="" className='mb-3'/>
    <div className='flex flex-row gap-2'>
    <p className='text-4xl font-black mt-4'>85 </p>
    <span className='= text-lg ' >Rental <br /> Outlets</span>
    </div>
</div>
<div>
    <img src={Icon3} alt="" className='mb-3'/>
    <div className='flex flex-row gap-2'>
    <p className='text-4xl font-black  mt-4'>75 </p>
    <span className='text-lg' >Repair <br /> Shop</span>
    </div>
</div>
                 </div>
        </div>
    </div>
  )
}

export default Aboutcompany