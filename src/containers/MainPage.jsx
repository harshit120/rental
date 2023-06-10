import React from 'react'
import HErobg from "../images/hero/hero-bg.png";
import Maincar from "../images/hero/main-car.png";
import {FaGreaterThan} from 'react-icons/fa';
import { AiFillCheckCircle} from 'react-icons/ai';



const MainPage = () => {
    function scrolldown(){
        console.log("hrllo")
    }
  return (
    <div className='flex flex-row justify-between'>
        <div className='flex flex-col mt-48 ml-20'>
            <h1 className='text-xl font-semibold mb-6'>
                Plan your trip now
            </h1>
            <p className=' font-bold text-5xl'>
                Save <span className='text-orange-600'>big</span>  with our <br/>car rental
            </p>
            <p className='mt-12 opacity-80 '>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,<br></br>flexible pick-up options and much more
            </p>
            <div className='mt-10 flex flex-row gap-8'>
                <button className='bg-orange-600 py-4  text-lg font-bold text-white px-6' onClick={scrolldown}> <p className='flex space-x-2 justify-between'> Book Ride <span className='relative top-[5px] left-2  m-0 rounded-full'> <AiFillCheckCircle/> </span></p></button>
                <button className='bg-black py-[14px]  text-lg font-bold text-white px-6 hover:bg-white border-2 border-black hover:text-black'> <p className='flex space-x-2 align-middle'> Book Ride <span className='relative top-[5px] left-2  m-0 rounded-full'> <FaGreaterThan/> </span></p></button>
            </div>
          
        </div>
        <div className=''>
            <img src={HErobg} alt="" className='absolute -z-50 right-0 top-0' />
            <img src={Maincar} alt="" className='relative z-20 top-32 w-11/12 right-5' />
        </div>
    </div>
  )
}

export default MainPage