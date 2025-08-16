import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navber = ({ setinputData,setname,counts}) => {
  const [uservalue, setuservalue] = useState(null);
  const [data, setdata] = useState(null);
  // const [filter, setfilter] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    fetch("/product-home.json")
      .then((pre) => {
        return pre.json();
      })
      .then((json) => {
        //console.log(json);
        setdata(json);
      });
  }, []);

  function settingValue(val) {
    setuservalue(val);
  }
  useEffect(() => {
    if (uservalue && data) {
      let filterData = data.filter((vale) =>
        vale.title.toLowerCase().includes(uservalue.toLowerCase())
      );
      console.log(filterData);
      setinputData(filterData);
      // setfilter(filterData);
      navigate("/filter/");
    }
  }, [uservalue, data]);

  return (
    <>
      {/* {console.log(uservalue)
    } */}
      <div className="nav">
        <div className="child-1">
          {" "}
          <p>purem</p>
          <p>oda</p>
        </div>
        <div className="child-2">
          <ul>
            <Link className="link" to={"/"}>
              <li>Home</li>
            </Link>
            <Link className="link" to={"women"}>
              <li>Womenwear</li>
            </Link>
            <Link className="link" to={"mens"}>
              <li>Menswear</li>
            </Link>
            <Link className="link" to={"kids"}>
              <li>Kids</li>
            </Link>
          </ul>
        </div>
        <div className="child-3">
          <div>
            <label htmlFor="search">
              <i className="ri-search-line"></i>
            </label>
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log(e.target.value);
                  settingValue(e.target.value);
                  setname(e.target.value);
                  e.target.value = "";
                }
              }}
              type="text"
              id="search"
              placeholder="search"
            />
          </div>
          <Link className="link links" to={"/login/"}>
            <button className="login">Login</button>
          </Link>
          <Link className="link links" to={"/addcart/"}>
            <button className="sign in"><i class="ri-shopping-cart-line"></i>{counts}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navber;
