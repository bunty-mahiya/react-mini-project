import "./App.css";
import "./Apps.css";
import Navber from "./Navber";
import Heropage from "./Heropage";
import Product from "./Product";
import Footer from "./Footer";
import Productbtn from "./Product-btn";
import Text from "./Text";
import Contant from "./Contant";
import Women from "./Women";
import Mens from "./Mens";
import Kids from "./Kids";
import { Summer, Winter, Monsoon } from "./Page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Login from "./Login";
import { useState } from "react";
import Itime from "./Itime";
import AddCart from "./AddCart";
// import { useState } from 'react'
function App() {
  const [inputData, setinputData] = useState();
  const [name, setname] = useState();
  const[getproduct,setgetproduct]=useState([])
  const[counts,setcounts]=useState(0)
 console.log(getproduct);
 console.log(counts);
 
  return (
    <>
      <BrowserRouter>
        <Navber setinputData={setinputData} setname={setname} counts={counts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all/" element={<Product />} />
          <Route path="/summer" element={<Summer />} />
          <Route path="/summer/:id" element={<ProductDetail setgetproduct={setgetproduct} getproduct={getproduct} setcounts={setcounts}/>} />
          <Route path="/monsoon" element={<Monsoon />} />
          <Route path="/monsoon/:id" element={<ProductDetail setgetproduct={setgetproduct} getproduct={getproduct} setcounts={setcounts}/>} />
          <Route path="/winter" element={<Winter />} />
          <Route path="/winter/:id" element={<ProductDetail setgetproduct={setgetproduct} getproduct={getproduct}setcounts={setcounts} />} />
          <Route path="/women" element={<Women />} />
          <Route path="/women/:id" element={<ProductDetail setgetproduct={setgetproduct} getproduct={getproduct} setcounts={setcounts} />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/mens/:id" element={<ProductDetail setgetproduct={setgetproduct} getproduct={getproduct} setcounts={setcounts} />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/kids/:id" element={<ProductDetail setgetproduct={setgetproduct} getproduct={getproduct} setcounts={setcounts}/>} />
          <Route path="/product/:id" element={<ProductDetail setgetproduct={setgetproduct} getproduct={getproduct} setcounts={setcounts}  />} />
          <Route path="/productDetail/:id" element={<ProductDetail setgetproduct={setgetproduct} getproduct={getproduct} setcounts={setcounts}/>} />
          <Route path="/login/" element={<Login />} />
          <Route path="/filter/" element={<Itime inputData={inputData} name={name} />} />
          <Route path="/filter/:id" element={<ProductDetail setgetproduct={setgetproduct} getproduct={getproduct} setcounts={setcounts} />} />
          <Route path="/addcart/" element={<AddCart getproduct={getproduct} setgetproduct={setgetproduct} setcounts={setcounts}/>}/>
        </Routes>
        {/* <Contant/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
