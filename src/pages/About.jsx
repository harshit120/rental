import React from 'react'
import Navbar from '../containers/Navbar'
import Bg from '../images/hero/heroes-bg.png'
import Aboutcompany from '../containAbout/Aboutcompany'
import Planyourtrip from '../containers/Planyourtrip'
import Contact from '../containAbout/Contact'
import Footer from '../containers/Footer'
const About = () => {
 
  return (
    <div className=''>
      <img src={Bg} alt="" className='absolute -z-50 opacity-10' />
      <Navbar/>
      <Aboutcompany/>
      <Planyourtrip/>
      <Contact/>
     <Footer/>
    </div>
  )
}

export default About