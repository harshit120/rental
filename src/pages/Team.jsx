import React from 'react'
import Teammember from '../contentTeam/Teammember'
import Contact from '../containAbout/Contact'
import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'
import Bg from '../images/hero/heroes-bg.png'


const Team = () => {
  return (
    <div className='bg-slate-50'>
      <Navbar/>
            <img src={Bg} alt="" className='absolute top-0  opacity-10' />
      
        <Teammember/>
        <Contact/>
   
      <Footer/>
    </div>
  )
}

export default Team