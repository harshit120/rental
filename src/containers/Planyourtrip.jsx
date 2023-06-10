import React from 'react'

import { Plan_data } from './Plandata';
const Planyourtrip = () => {
  const data=Plan_data;
 


  
  return (

<div  className=' pt-28 pb-36'>
<div className=' text-center'>
        <p className='text-2xl  font-semibold'>Plan Your trip now</p>
        <p className='my-10 text-5xl font-bold'>Quick & easy car rental</p>
       </div>

<div className='flex flex-row justify-center space-x-32 items-center '>
   {
          data.map((data)=>{

            return(
              <div className='w-[270px] text-center '>
               
                   <img src={data.img} alt="" className='mx-auto' />
                   <p className='text-center text-2xl font-bold'>{data.data1}</p>
          <p className='mt-4 text-gray-700'>{data.data2}</p>
                </div>
            )
          }

         
          //   `  <img src={data.img} alt="" />`
          // `<p>{data.data2}</p>`
            
          )
        } 
        </div>
</div>
   )
}

export default Planyourtrip