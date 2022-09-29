import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./FullPage.css";


import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Card from "../cardPage/Card";

const FullPage = () => {
    const [starInfo, setStarInfo ] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setStarInfo(data))
    },[])

    const handleAddToCart = (product) => {
       

        const newCart = [...cart, product]
        setCart(newCart)

    }



  return (
    <div className="container-main grid md:grid-cols-4 grid-cols-1  gap-2 bg-slate-200">
      <div className="card-container col-span-3 ">
        <div className="logo flex">
          <FontAwesomeIcon
            className="text-red-400 mr-5 text-5xl"
            icon={faDumbbell}
          ></FontAwesomeIcon>
          <h1 className="text-4xl font-bold text-red-400 ">Star-Fitness</h1>
        </div>
        <h5 className="text-2xl font-bold my-2">Select today's exercise</h5>


<div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-4 gap-5">
           
     
    {
        starInfo.map(star=> <Card id={star.id} star={star} handleAddToCart={handleAddToCart}></Card>)
    }
    </div>


    
   
   </div>
   </div>

      
      
          
      </div>

      <div className="info-container bg-white sticky">
     <Cart cart={cart}></Cart>
        </div>
    </div>
  );
};

export default FullPage;
