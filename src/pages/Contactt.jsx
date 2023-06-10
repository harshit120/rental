import React from 'react'
import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'
import Contact from '../containAbout/Contact'
import Bg from '../images/hero/heroes-bg.png'
import Connect from '../ContainContact/Connect'

const Contactt = () => {
  




  return (
    <div>
       <img src={Bg} alt="" className='absolute -z-50 opacity-10' />
      <Navbar/> 
      <Connect/> 
<Contact/>
     <Footer/>  
    </div>
  )
}


export default Contactt