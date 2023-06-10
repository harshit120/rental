
// import Navbar from "./containers/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import MainPage from "./containers/MainPage";
// import Bookcar from "./containers/Bookcar";
// import Planyourtrip from "./containers/Planyourtrip";
// import SelectCar from "./containers/SelectCar";
// import Savebig from "./containers/Savebig";
// import Chooseus from "./containers/Chooseus";
// import Reviewed from "./containers/Reviewed";
// import Faq from "./containers/Faq";
// import Download from "./containers/Download";
// import Footer from './containers/Footer'
import About from './pages/About'
import Team from "./pages/Team";

import Contactt from "./pages/Contactt";
import Testimo from "./pages/Testimo";
function App() {
 // console.log(reviews[0]);
  return (
    <div className="bg-#ffffff scroll-smooth ">
    {/* <div className="">
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
      </div> */}
      <div>
      <Routes>
      <Route index  element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="team" element={<Team/>} />
      <Route path="contactt" element={<Contactt/>} />
      <Route path="testi" element={<Testimo/>} />


      </Routes>
     
    </div>
    </div>
  );
}

export default App;
