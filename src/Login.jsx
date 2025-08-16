import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="child-1">
          <img src="https://i.pinimg.com/1200x/4a/51/4f/4a514f5c74b447fd1ebd0c4030228b77.jpg" alt="" />
        </div>
        <div className="child-2">
           
          <div className="text">
            <h1>welcome back</h1>
            <p>welcome back please enter your details</p>
          </div>
          <form action="#">
            <label htmlFor="email">email</label>
            <input required type="email" id="email" placeholder="email"/>
            <label htmlFor="password">password</label>
            <input required type="password" id="password" placeholder="password"/>
            <span>
              <span className="spa">
                <input type="checkbox" name="checkbtn" id="checkbtn" />
                remember for 30 days
              </span>
              <p style={{cursor:"pointer"}}>forget password</p>
            </span>
            <button id="sign" style={{background:"black",color:"white" }}>login</button>
            <button id="sign"> login with google </button>
          </form>
          <div className="text"><p>create new account <span style={{color:"black" , cursor:"pointer"}}>sign in</span></p></div>
        </div>
      </div>
    </>
  );
};

export default Login;
