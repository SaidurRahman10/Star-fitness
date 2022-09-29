import React from "react";

const Card = (props) => {

    const {name, img , age , time, information} = props.star;
    const {handleAddToCart} = props;
  return (

    <div class="bg-white rounded-lg overflow-hidden mb-10">
    <img className="h-2/4" src={img} />
    <div className="p-8 sm:p-9 md:p-7 xl:p-9">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-base pt-4 text-red text-slate-500 leading-relaxed mb-7">
        {information.slice(0, 100)}...<span className="text-xs bg-black text-white px-2 rounded-lg">Read More</span>
      </p>
      <h5 className="text-lg font-bold">Age: {age}</h5>
      <h5 className="text-lg font-bold mt-2">
       Daily Exercise Time: <span>{time}</span>s
      </h5>

 
        <button onClick={()=>handleAddToCart()} className="bg-red-400 text-white px-16 mt-3  py-2 rounded-xl">
          <p>Add To List</p>
        </button>
    </div>
    </div>
  
 
    
   
   
  );
};

export default Card;
