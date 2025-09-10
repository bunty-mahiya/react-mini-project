import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShimmerProductCard from './Shimmer';

const Women = () => {
  const [state, setstate] = useState(null);
   useEffect(() => {
     const data = fetch("./product-home.json")
       .then((data) => {
         return data.json();
       })
       .then((data) => {
         setstate(data);
       });
   }, []);
   if (!state) {
     return(<><ShimmerProductCard/></>);
   } else {
     return (
        <>
        <div className='hero-container'>
          <div className="child-2">
        <div className='img'>
          <img srcSet="https://i.pinimg.com/736x/e5/58/c4/e558c46b9fef2bac460edebdfdebc550.jpg" alt="hero-img" srcset="" />
        </div>
      </div>
      <div className="child-1">
        <div style={{backgroundColor:"#CDCDCD"}} className="child1">
          <div className="text-1">
            <p>for <div></div></p>
            <p>everyone but</p>
            <p>notanyone</p>
          </div>
          <div className="text-2">
            <p>We establish personal relationships with our boutiques, to make</p>
            <p>sure each is vetted for a stress-free shopping experience</p>
          </div>
        </div>
        <div className="child2">
          <div className="img">
            <img src="https://i.pinimg.com/1200x/b7/a3/7d/b7a37d4501a93aff5ca8829a4db1abcc.jpg" alt="" />
          </div>
          <div className="img">
            <img src="https://i.pinimg.com/1200x/36/4e/46/364e464cb83781b904761c14af8e951e.jpg" alt="" />
          </div>
        </div>
      </div> 
      </div>
         <div className="pro-container">
           {state.map((vale) => {
             if (vale.category=="Women" || vale.category=="Accessories" || vale.category=="Footwear" ) {
               return (
                 <>
                   <div className="child" key={vale.id}>
                     <div className="img">
                     <Link to={`/summer/${vale.id}`}><img src={vale.image} alt={vale.image} /></Link>
                     </div>
                     <div className="text">
                       <p>{vale.title}</p>
                       <p>price:{vale.price}</p>
                     </div>
                   </div>
                 </>
               );
             }
           })}
         </div>
          <div className="con-container">
        <div style={{background:"#D0946A"}} className="child-2">
            <div className="box-1">
                <p>we're changing </p>
                <p>the way things </p>
                <p>get made</p>
            </div>
            <div className="box-2" >
                <div className='dabba-1'>
                    <h1>sustainability</h1>
                    <p>we're challenging conventional retail,</p>
                    <p>putting an end to dead stock,</p>
                    <p>unconventional waste and more fantastic</p>
                </div>
                <div className='dabba-2'>
                     <h1>mission</h1>
                    <p>we're on a mission to empower</p>
                    <p>create independence in a commercial</p>
                    <p>world and incredible</p>
                </div>
            </div>
        </div>
        <div className="child-1">
            <img src="https://i.pinimg.com/736x/6d/ae/73/6dae73ee717e4d3abc36b9ca21dafa1a.jpg" alt="" srcset="" />
        </div>
    </div>
       </>
     );
   }
}

export default Women