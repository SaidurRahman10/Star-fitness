import React from "react";
import logo from "./sr.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ cart }) => {
  let exerciseTime = 0;
  for (const item of cart) {
    exerciseTime = exerciseTime + item.time;
  }

  const breakTime = (e) => {
    const bt = document.getElementById("bT");
    localStorage.setItem("break", JSON.stringify(e));
    bt.innerText = e;
    return bt;
  };
  let storeTime = localStorage.getItem("break");
  if (storeTime === null) {
    storeTime = "0";
  }
 

  return (
    <div>
      <div className="container  mt-5">
        <div className="personal-info flex ml-2">
          <img className="Logo w-14 h-14 rounded-full " src={logo} alt="" />

          <h3 className="text-2xl ml-2  mt-2 font-bold">Saidur Rahman</h3>
        </div>

        <div className="my-info mt-8 bg-slate-300 ml-2 flex justify-center items-center gap-16  md:gap-4 lg:gap-6 h-20 rounded-lg">
          <div className="city">
            <h4 className="font-bold text-lg md:text-md lg:text-2xl">FENI</h4>
            <h3 className=" text-sm text-center">City</h3>
          </div>
          <div className="profession">
            <h4 className="font-bold text-lg md:text-md lg:text-2xl">
              STUDENT
            </h4>
            <h3 className=" text-sm text-center">Profession</h3>
          </div>
          <div className="collage">
            <h4 className="font-bold text-lg md:text-md lg:text-2xl text-center">
              FCI
            </h4>
            <h3 className=" text-sm ">Collage</h3>
          </div>
        </div>

        <h3 className="my-6 text-2xl font-bold ml-2">Add A Break</h3>

        <div className="break">
          <div className="my-info mt-8 bg-slate-300 ml-2 flex justify-center items-center gap-16 md:gap-2 lg:gap-8 h-20 rounded-lg">
            <button
              onClick={() => breakTime(10)}
              className="bg-red-400 px-2 py-2 text-white rounded-full"
            >
              <span>10</span>s
            </button>

            <button
              onClick={() => breakTime(15)}
              className="bg-red-400 px-2 py-2 text-white rounded-full"
            >
              <span>15</span>s
            </button>

            <button
              onClick={() => breakTime(20)}
              className="bg-red-400 px-2 py-2 text-white rounded-full"
            >
              <span>20</span>s
            </button>

            <button
              onClick={() => breakTime(30)}
              className="bg-red-400 px-2 py-2 text-white rounded-full"
            >
              <span>30</span>s
            </button>
          </div>
        </div>

        <h3 className="my-6 text-2xl font-bold ml-2">Exercise Details</h3>

        <div className="exercise-time ml-2 bg-slate-300 h-16 rounded-lg flex justify-between items-center">
          <h3 className="ml-2 font-bold text-md">Exercise Time</h3>
          <h5 className="mr-2">
            <span>{exerciseTime}</span>s
          </h5>
        </div>

        <div className="break-time mt-5 ml-2 bg-slate-300 h-16 rounded-lg flex justify-between items-center">
          <h3 className="ml-2 font-bold">Break Time</h3>
          <h5 className="mr-2">
            <span id="bT">{storeTime}</span>s
          </h5>
        </div>

        {/* <div className="flex items-center justify-center">
          <button
            onClick={notify}
            className="bg-red-400 text-white px-16 mt-3  py-2 rounded-xl"
          >
            <p>Task Completed</p>
          </button>
        
        </div> */}
        <div className="flex items-center justify-center">
          <button
            className="bg-red-400 text-white px-16 mt-3  py-2 rounded-xl"
            onClick={notify}
          >
            Task Completed!
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Cart;
