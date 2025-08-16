import React from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
const Itime = ({inputData,name}) => {
    if (inputData=="") {
        return <h1 style={{textTransform:"capitalize",
            fontSize:"1.8rem",
        }}>{name} product not available yet </h1>
    }
  return (
    <>
     <h1 style={{margin:"2rem",fontSize:"1.8rem",textTransform:"capitalize"}}>{name}</h1>
    <div className="pro-container">
          {inputData.map((vale) => {
          return<><div className="child" key={vale.id}>
            <div className="img">
             <Link to={`/product/${vale.id}`}> <img src={vale.image} alt={vale.image}  /></Link>
              </div>
              <div className="text">
              <p>{vale.title}</p>
              <p>price:{vale.price}</p>
              </div>
          </div></> 
        })}</div>
    </>
  )
}

export default Itime