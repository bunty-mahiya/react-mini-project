import React from 'react'
import { useState,useEffect } from 'react';
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
     return <p>Loading data</p>;
   } else {
     return (
       <>
       <div className='hero-container' >
      <div className="child-1">
        <div className="child1" style={{background:"#949293"}}>
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
            <img src="https://i.pinimg.com/1200x/e4/98/ff/e498ff5d56c7eaff2db36c24c29a9427.jpg" alt="" />
          </div>
          <div className="img">
            <img src="https://i.pinimg.com/1200x/80/75/ec/8075ec25d0973d5ac99f9b9ab90e1828.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="child-2">
        <div className='img'>
          <img srcSet="https://i.pinimg.com/736x/b0/e6/11/b0e611afd4e431652ab1dedda0e18cc2.jpg" alt="hero-img" srcset="" />
        </div>
      </div>
      </div>
         <div className="pro-container">
           {state.map((vale) => {
             if (vale.category=="Men" || vale.category=="Accessories" || vale.category=="Footwear" ) {
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
        <div className="child-1">
            <img src="https://i.pinimg.com/1200x/45/96/27/459627c76623d6f85561f31e7cab0eed.jpg" alt="" srcset="" />
        </div>
        <div className="child-2" style={{background:"#F9E6D1"}}>
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
    </div>
       </>
     );
   }
}

export default Women