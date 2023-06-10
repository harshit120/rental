import React, { useState } from "react";
import Book from "../images/book-car/book-bg.png";
const Bookcar = () => {
  const [data, setdata] = useState({
    CarName: "",
    DropLocation: "",
    Pickup: "",
    Picktime: "",
    dropTime: "",
  });
  function check(){
    if(Object.values(data).includes("")){
      
      console.log("empty")

    }
    else{
      console.log("empty fucked up")
    }
  }

  function handler(event) {
    setdata((prev) => {
      const { name, value, checked, type } = event.target;

      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function Submit(event) {
    event.preventDefault();
    console.log("hello");
  }
  console.log(data);

  return (
    <div id="Bookcar" className="my-32  mx-20  ">
      <div className="relative  -z-30 ">
        <img
          src={Book}
          alt=""
          className="absolute  bg-white w-[1500px] h-[350px] shadow-2xl "
        />
      </div>
      <div className="mx-20 pt-6 text-2xl  font-bold">Book a car</div>
      <form onSubmit={Submit}>
        <div className="grid grid-cols-3 gap-4  mx-20 py-6 ">
          <div className="flex flex-col  ">
            <label for="cars" className="mb-3 font-semibold text-lg ">
              Select Your Car Type <span className="text-red-500">*</span>
            </label>
            <select
              className="border-2 py-2 pl-4"
              required
              id="CarName"
              name="CarName"
              value={data.CarName}
              onChange={handler}
            >
              <option>Select your car type</option>
              <option value="Audi A1 S-Line">Audi A1 S-Line</option>
              <option value="VW Golf 6">VW Golf 6</option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
              <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
              <option value="VW Passat CC">VW Passat CC</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label for="pick up" className="mb-3 font-semibold text-lg ">
              {" "}
              Pick up{" "}
            </label>
            <select
              className="border-2 py-2 pl-4"
              required
              id="Pickup"
              name="Pickup"
              value={data.Pickup}
              onChange={handler}
            >
              <option>Select pick up location</option>
              <option>Belgrade</option>
              <option>Novi Sad</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label for="drop" className="mb-3 font-semibold text-lg ">
              {" "}
              drop off location
            </label>

            <select
              className="border-2 py-2 pl-4"
              required
              id="DropLocation"
              name="DropLocation"
              value={data.DropLocation}
              onChange={handler}
              
            >
              <option>Select drop off location</option>
              <option>Novi Sad</option>
              <option>Belgrade</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 mx-20">
          <div className=" flex flex-col">
            <label htmlFor="" className="mb-3 font-semibold text-lg ">
              Pick up
            </label>
            <input
              className="border-2 py-2 pl-4"
              required
              id="Picktime"
              name="Picktime"
              value={data.Picktime}
              onChange={handler}
              type="date"
            ></input>
          </div>

          <div className=" flex flex-col">
            <label htmlFor="" className="mb-3 font-semibold text-lg ">
              Drop off
            </label>
            <input
              className="border-2 py-2 pl-4"
              required
              id="droptime"
              name="dropTime"
              value={data.dropTime}
              onChange={handler}
              type="date"
            ></input>
          </div>
          <div>
            <button
              className="bg-orange-600 px-40 mx-3 py-2 mt-10 text-white text-lg font-bold"
            onClick={check}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Bookcar;
