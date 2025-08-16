import React, { useState } from "react";
import { useEffect } from "react";

const AddCart = ({ getproduct,setgetproduct,setcounts }) => {
  console.log(getproduct);
   
    const uniqueProducts = getproduct.filter(
  (item, index, self) =>
    index === self.findIndex((p) => p.id === item.id)
);

setcounts(uniqueProducts.length);
  //  setcounts(getproduct.length);
  if (getproduct=="") {
    return (
      <h1 style={{ textAlign: "center", textTransform: "capitalize" }}>
        please add your product
      </h1>
    );
  }
  
  return (
    <> 
    <div>
        <div className="add-to-cart">
          {uniqueProducts.map((ele)=>{
           return <div className="pro-con">
            <div className="img">
              <img src={ele.image} alt={ele.title} />
            </div>
            <div className="text">
              <p>{ele.title}</p>
              <p>price: {ele.price}</p>
              <p>Category: {ele.category}</p>
              <p>season: {ele.season}</p>
              <p>brand: {ele.brand}</p>
              <p>description: {ele.description}</p>
              <div className="btn">
                <button>buy now</button>
                <button
                 onClick={()=>{
                   let removeF=getproduct.filter((val)=>{
                      return val.id != ele.id
                   })
                   setgetproduct(removeF);
                   
                 }}>remove</button>
              </div>
            </div>
          </div>
          })}
          
        </div>
      </div>
    </>
  );
};

export default AddCart;
