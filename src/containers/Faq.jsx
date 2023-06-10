import React, { useState } from "react";
import Icon from '../images/faq/car.png'
const Faq = () => {
  const [click, setclick] = useState(false);
  function af(event) {
    setclick(event.target.getAttribute("id"));
  }
  return (
  
    <div className="mx-[380px] mt-20">
      <div className="text-center">
        <p className="text-xl font-bold">FAQ</p>
        <p className="text-5xl font-bold mt-2">Frequently Asked Quesstion</p>
        <p className="mt-8 ">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>
      
      <div className="mt-44 relative right-8 bottom-9 shadow-2xl">
        <p
          onClick={af}
          id="1"
          className={`bg-black  ${click === "1" ? "bg-orange-600" : "bg-white"} py-4 px-4 border-b-2 text-xl font-semibold`}
        >
          1.What is special about comparing rental car deals?
         
        </p>
        {click === "1" ? (
            <p id='4' className="bg-white pt-3" onClick={af}>
              {" "}
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.{" "}
            </p>
          ) : (
            " "
          )}
        <p
          onClick={af}
          id="2"
          className={`bg-black ${click === "2" ? "bg-orange-600" : "bg-white"} py-4 px-4 border-b-2 text-xl font-semibold`}
        >
          2. How do I find the car rental deals?
         
        </p>
        {click === "2" ? (
            <p id='4' className="bg-white pt-3" onClick={af}>
              {" "}
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.{" "}
            </p>
          ) : (
            " "
          )}
        <p
          onClick={af}
          id="3"
          className={`bg-black ${click === "3" ? "bg-orange-600" : "bg-white"} py-4 px-4 border-b-2 text-xl font-semibold`}
        >
          3. How do I find such low rental car prices?
          
        </p>
        {click === "3" ? (
            <p id='4' className="bg-white pt-3" onClick={af}>
              {" "}
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.{" "}
            </p>
          ) : (
            " "
          )}
      </div>
      <div className="relative bottom-[360px] right-[380px] -z-10">
      <img src={Icon} alt="" className="   " />
      </div>
    </div>
   
  );
};

export default Faq;
