import React from 'react'
import Navbar from '../containers/Navbar'
import Bg from '../images/hero/heroes-bg.png'
import Contact from '../containAbout/Contact'
import Footer from '../containers/Footer'
import Reviewed from '../containers/Reviewed'

const Testimo = () => {
  return (
    <div>


      <Navbar/>
      <img src={Bg} alt="" className='relative -z-50 opacity-10  bottom-28 ' />
<Reviewed/>
      <Contact/>
     <Footer/>
    </div>
  )
}

export default Testimo