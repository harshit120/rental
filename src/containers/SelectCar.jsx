import React, { useEffect, useState } from "react";
import { CAR_DATA } from "./Data";

const SelectCar = () => {
  const data = CAR_DATA;
  const [color, setcolor] = useState("0");
  const [ids, setid] = useState(0);
  function Datachange(event) {
    console.log(event.target.getAttribute("id"));
    setcolor(event.target.getAttribute("id"));
    setid(event.target.getAttribute("id"));
  }

  function scrollb() {
    // document
    // .querySelector("#Bookcar")
    // .scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-white px-20 ">
      <div className="text-center">
        <p className="text-2xl font-semibold">Vehical Models</p>
        <p className="mt-5 text-5xl font-semibold">Our rental fleet</p>
        <p className="mt-5 text-zinc-500">
          Choose from a variety of our amazing vehicles to rent for your next{" "}
          <br /> adventure or business trip
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start gap-4 ">
          <button
            id="0"
            className={`border-2  py-3 px-20   ${
              color ===  "0"  ? "bg-orange-600" : "bg-white"
            }`}
            onClick={Datachange}
          >
            Audi A1 S-Line
          </button>
          <button
            id="1"
            className={`border-2 py-3  ${
              color === "1" ? "bg-orange-600" : "bg-white"
            }`}
            onClick={Datachange}
          >
            VW Golf 6
          </button>
          <button
            id="2"
            className={`border-2  py-3 ${
              color === "2" ? "bg-orange-600" : "bg-white"
            }`}
            onClick={Datachange}
          >
            Toyota Camry
          </button>
          <button
            id="3"
            className={`border-2  py-3 ${
              color === "3" ? "bg-orange-600" : "bg-white"
            }`}
            onClick={Datachange}
          >
            BMW 320 ModernLine
          </button>
          <button
            id="4"
            className={`border-2  py-3 ${
              color === "4" ? "bg-orange-600" : "bg-white"
            }`}
            onClick={Datachange}
          >
            Mercedes-Benz GLK
          </button>
          <button
            id="5"
            className={`border-2  py-3 ${
              color === "5" ? "bg-orange-600" : "bg-white"
            }`}
            onClick={Datachange}
          >
            VW Passat CC
          </button>
        </div>
        <div>
          {data[ids].map((data) => {
            return (
              <div className=" ">
                <img src={data.img} alt="" className=" w-[550px] h-auto" />
              </div>
            );
          })}
        </div>

        <div>
          {data[ids].map((data) => {
            return (
              <div>
                <p className="bg-orange-600 py-2 text-center text-white font-semibold text-xl">{`$${data.price} /rent per day`}</p>
                <div className=" w-[250px] border-2 border-black ">
                  <div className="grid grid-flow-row grid-cols-2 mt-2  pb-2 border-b-2 border-b-black  ">
                    <p className="border-r-2 border-black text-center">Model</p>

                    <p className="text-center">{data.name}</p>
                  </div>
                  <div className="grid grid-flow-row grid-cols-2  mt-2 pb-2 border-b-2 border-b-black  ">
                    <p className="border-r-2 border-black text-center">Mark</p>

                    <p className="text-center">{data.mark}</p>
                  </div>
                  <div className="grid grid-flow-row grid-cols-2  mt-2  pb-2 border-b-2 border-b-black  ">
                    <p className="border-r-2 border-black text-center ">year</p>

                    <p className="text-center">{data.year}</p>
                  </div>
                  <div className="grid grid-flow-row grid-cols-2  mt-2  pb-2 border-b-2 border-b-black  ">
                    <p className="border-r-2 border-black text-center">Doors</p>

                    <p className="text-center">{data.doors}</p>
                  </div>
                  <div className="grid grid-flow-row grid-cols-2  mt-2   pb-2 border-b-2 border-b-black ">
                    <p className=" border-r-2 border-black text-center">AC</p>

                    <p className="text-center">{data.air}</p>
                  </div>
                  <div className="grid grid-flow-row grid-cols-2  mt-2  pb-2 border-b-2 border-b-black ">
                    <p className="border-r-2 border-black  text-center">
                      Transmission
                    </p>

                    <p className="text-center">{data.transmission}</p>
                  </div>
                  <div className="grid grid-flow-row grid-cols-2  mt-2  pb-2    ">
                    <p className="border-r-2 border-black text-center">Fuel</p>

                    <p className="text-center">{data.fuel}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <button className=" mt-3 bg-orange-600 w-[250px] py-2 font-bold text-xl text-white" onClick={scrollb}>
              {" "}
              Reserve now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCar;
