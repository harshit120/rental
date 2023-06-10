import React from 'react'
import Team1 from '../images/team/1.png'
import Team2 from '../images/team/2.png'
import Team3 from '../images/team/3.png'
import Team4 from '../images/team/4.png'
import Team5 from '../images/team/5.png'
import Team6 from '../images/team/6.png'


const Teammember = () => {
  return (
    <div className='mt-96 mb-32'>
<div className='grid grid-cols-3 grid-rows-2 mx-44 gap-8'>
    <div className='' >
        <img src={Team1} alt="" className='bg-slate-300 w-[400px] h-[430px]  ' />
        <div className='bg-white text-center py-6 shadow-xl'>
        <p className='text-xl font-semibold'>Like Miller</p>
        <p>Salesman</p>
        </div>
      
    </div>
    <div>
        <img src={Team2} alt="" className='bg-slate-300' />
        <div className='bg-white text-center py-6  shadow-xl'>
        <p className='text-xl font-semibold'>Michal Diaz</p>
        <p>Business Owner</p>
        </div>
    </div>
    <div>
        <img src={Team3} alt=""  className='bg-slate-300'/>
        <div className='bg-white text-center py-6 shadow-xl'>
        <p className='text-xl font-semibold'>Briana Ross</p>
        <p>Photographer</p>
        </div>
    </div>
    <div>
        <img src={Team4} alt="" className='bg-slate-300' />
        <div className='bg-white  text-center py-6 shadow-xl'>
        <p className='text-xl font-semibold'>LAuren Rivera</p>
        <p>Car Detailist </p>
        </div>
    </div>
    <div>
        <img src={Team5} alt="" className='bg-slate-300' />
        <div className='bg-white text-center py-6 shadow-xl'>
        <p>MArtin Rizz</p>
        <p className='text-xl font-semibold'>Mechanic</p>
        </div>
    </div>
    <div>
        <img src={Team6} alt=""className='bg-slate-300' />
        <div className='bg-white text-center py-6 shadow-xl'>
        <p className='text-xl font-semibold'>Caitlyn Hunt</p>
        <p>Menager</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Teammember