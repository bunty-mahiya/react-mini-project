import React from 'react'
import { useState,useEffect } from 'react';
import ShimmerProductCard from "./Shimmer"
import { Link } from 'react-router-dom';

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
    return (<><ShimmerProductCard/></>)
   } else {
     return (
       <>
       
       <div className='hero-container'>
          <div className="child-2">
        <div className='img'>
          <img srcSet="https://i.pinimg.com/736x/f3/78/4d/f3784da04f4b8c78ba2f62ad939ccede.jpg" alt="hero-img" srcset="" />
        </div>
      </div>
      <div className="child-1">
        <div style={{backgroundColor:"#E2E0E1"}} className="child1">
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
            <img src="https://i.pinimg.com/736x/6e/87/a0/6e87a067fb98211e0ec7c3b0a062293b.jpg" alt="" />
          </div>
          <div className="img">
            <img src="https://i.pinimg.com/1200x/dc/86/42/dc86427317644b6b23f803977c9afab5.jpg" alt="" />
          </div>
        </div>
      </div> 
      </div>
         <div className="pro-container">
           {state.map((vale) => {
             if (vale.category=="Kids" || vale.category=="Accessories" ) {
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
        <div style={{backgroundColor:"#A5C4D9"}} className="child-2">
            <div className="box-1">
                <p>we're changing </p>
                <p>the way things </p>
                <p>get made</p>
            </div>
            <div className="box-2">
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
            <img src="https://i.pinimg.com/1200x/37/46/a6/3746a6aa9c10e2017f68c2cf703de1ac.jpg" alt="" srcset="" />
        </div>
    </div>
       </>
     );
   }
}

export default Women