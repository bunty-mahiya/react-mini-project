import React, { useEffect, useState } from "react";
import Navber from "./Navber";
import Heropage from "./Heropage";
import Text from "./Text";
import Productbtn from "./Product-btn";
import Contant from "./Contant";
import { Link } from "react-router-dom";
const Product = () => {
  const [state, setstate] = useState(null);
  useEffect(() => {
    const data = fetch("./product-home.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setstate(data);
        // console.log(data);
      });
  }, []);
  if (!state) {
    return 
  } else {
    return (
      <>
      
      <Heropage/>
          <Text/>
          <Productbtn/>
        <div className="pro-container">
          {state.map((vale) => {
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
        <Contant/>
      </>
    );
  }
};

export default Product;
