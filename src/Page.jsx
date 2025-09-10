import ShimmerProductCard from "./Shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Text from "./Text";
import Heropage from "./Heropage";
import Productbtn from "./Product-btn";
import Contant from "./Contant";
const Summer = () => {
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
    return (<><ShimmerProductCard/></>);
  } else {
    return (
      <>
        <Heropage />
        <Text />
        <Productbtn />
        <div className="pro-container">
          {state.map((vale) => {
            if (vale.season == "Summer") {
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
        <Contant/>
      </>
    );
  }
};
const Winter = () => {
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
    return (<><ShimmerProductCard/></>);
  } else {
    return (
      <>
        <Heropage />
        <Text />
        <Productbtn />
        <div className="pro-container">
          {state.map((vale) => {
            if (vale.season == "Winter") {
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
        <Contant/>
      </>
    );
  }
};
const Monsoon = () => {
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
    return (<><ShimmerProductCard/></>);
  } else {
    return (
      <>
        <Heropage />
        <Text />
        <Productbtn />
        <div className="pro-container">
          {state.map((vale) => {
            console.log(vale);
            if (vale.season == "Monsoon") {
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
        <Contant/>
      </>
    );
  }
};

export { Winter, Monsoon, Summer };
