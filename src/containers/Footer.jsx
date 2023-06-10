import React from 'react'

const Footer = () => {
    function submit(event){
        event.preventDefault();
        console.log("done");
    }
  return (
    <div className='grid grid-cols-4 mx-20 mb-32'>
        <div className='px-8'>
            <p className='text-2xl'> <span className='font-semibold'>Car</span> Rental</p>
            <p className='mt-6 text-base font-semibold opacity-80'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
       <p className='mt-8 font-semibold'>(123)-456-789</p>
       <p className='font-semibold'>rental@gamil.com</p>
       <p>Design by ponchi</p>
        </div>
        <div className='px-10 flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>Compaany</h1>
            
            <p>New York</p>
            <p>Carees</p>
            <p>Mobile</p>
            <p>Blog</p>
            <p>How we work</p>
        </div>

        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-2xl'>Working Hours</h1>
            <p>Mon-fri:9:00Am-9:00PM</p>
            <p>Sat: 9:00Am-19:00PM</p>
            <p>SUnday CLosed</p>
        </div>
        <div className='flex flex-col'>
            <h1 className='font-bold text-2xl'>Subscription</h1>
            <p className='mt-3'>Subscribe your Email address for latest news & updates.</p>

            <form onSubmit={submit} className='flex flex-col gap-2 mt-5'>
                <input type="email" name="" id=""  placeholder='Email Address' className='py-2 px-4' required/>
               <button className='bg-orange-600 py-2'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Footer