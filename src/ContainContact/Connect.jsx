import React from 'react'

const Connect = () => {
  return (
    <div className='mx-32 mt-96'>

        <div className='grid grid-cols-3 gap-10'>
            <div>
                <p className='text-5xl font-bold'>Need additional information?</p>
                <p className='mt-10'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience</p>
            <p className='mt-10'>(123)456789</p>
            <p className='mt-2'>abc@gmail.com</p>
            <p className='mt-2'>Jaipur,India</p>
            </div>
         <form action="" className='col-span-2 ml-44'>
                <div className='flex flex-col'>
                <label htmlFor=""> Full Name *</label>
                <input type="text" name="" id="" placeholder='Harshit Khandelwal' />
                </div>
              <div className='flex flex-col'>
                <label htmlFor="">Email*</label>
              <input type="email" name="" id="" placeholder='xyz@gmail.com' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Tell us about it</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
               
              </form>   
            </div>

    </div>
  )
}

export default Connect