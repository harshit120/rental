import React from 'react'
import MainPage from "../containers/MainPage";
import Bookcar from "../containers/Bookcar";
import Planyourtrip from "../containers/Planyourtrip";
import SelectCar from "../containers/SelectCar";
import Savebig from "../containers/Savebig";
import Chooseus from "../containers/Chooseus";
import Reviewed from "../containers/Reviewed";
import Faq from "../containers/Faq";
import Download from "../containers/Download";
import Footer from '../containers/Footer'
import Navbar from '../containers/Navbar';
const Home = () => {
  return (
    <div>
       <div className="">
       <Navbar/>
      <MainPage/>
      <Bookcar/>
      <Planyourtrip/>
      <SelectCar/>
      <Savebig/>
      <Chooseus/>
      <Reviewed/>
      <Faq/>
      <Download/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home