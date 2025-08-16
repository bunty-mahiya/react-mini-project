import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Contant from "./Contant";
// import Navber from "./Navber";
const ProductDetail = ({setgetproduct,getproduct,setcounts}) => {
  // const[title,settitle]=useState(null)
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const[count,setcount]=useState(0)
  function updateCount() {
    setcount(count + 1)
    // setcounts(count)
  }
  useEffect(() => {
    console.log("inside effect");
    fetch("/product-home.json") // <-- corrected path
      .then((res) => res.json())
      .then((json) => {
        // console.log("fetched data", json);
        setdata(json);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!data) return <p>Loading data...</p>;

  const userdata = data.find((val) => String(val.id) === String(id));
  if (!userdata) return <p>Product not found</p>;
  return (
    <>
    {console.log(count)
    }
      <div className="ProductDetail">
        <div className="pro-con">
          <div className="img">
            <img src={userdata.image} alt={userdata.title} />
          </div>
          <div className="text">
            <p>{userdata.title}</p>
            <p>price:  {userdata.price}</p>
            <p>Category:  {userdata.category}</p>
            <p>season:  {userdata.season}</p>
            <p>brand:  {userdata.brand}</p>
            <p>description:  {userdata.description}</p>
            <div className="btn">
              <button >buy now</button>
              <button onClick={()=>{
                setgetproduct([...getproduct,userdata])
                setcounts(getproduct.length+1);
                
                updateCount()
              }}>add to cart</button>
            </div>
          </div>
        </div>
      </div>
       <div className="pro-container">
          { 
          data.map((vale) => {  
          return<><div className="child" key={vale.id}>
            <div className="img">
              <Link to={`/productDetail/${vale.id}`}><img src={vale.image} alt={vale.image}/></Link>
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
};

export default ProductDetail;
