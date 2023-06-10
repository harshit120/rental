import React from "react";
import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";
import Img3 from "../images/banners/bg02.png";
const Download = () => {
  return (
    <div className="-mt-60 mb-40">

<div className="col-span-2  ">
        <img src={Img3} alt="" className="" />
      </div>
    <div className=" -mt-96 grid grid-cols-3 ml-20">
         
        
      <div className=" col-span-1 ">
        <p className="text-4xl">Download our app to get most out of it</p>
        <p className="mt-8">
          Thrown shy denote ten ladies though ask saw. Or by to he going think 
          order event music. Incommode so intention defective at convinced. Led 
          income months itself and houses you
        </p>
        <div className="flex flex-row gap-8 mt-11 ">
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
        </div>
     
    </div>
   
    </div>
    </div>
  );
};

export default Download;
