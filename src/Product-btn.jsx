import React from 'react'
import { Link } from 'react-router-dom'

const Productbtn= () => {
  return (
    <><div>
        <div className="btn-session">
            <div className="text">
              <p>shop by </p>
              <p>essentials</p>
            </div>
            <div className="btns">
              <Link className='link' to={"/all"}><button type="button">all</button></Link>
              <Link className='link'  to={"/summer"}><button type="button">summer</button></Link>
              <Link className='link' to={"/winter"}><button type="button">winter</button></Link>
              <Link className='link' to={"/monsoon"}><button type="button">monsoon</button></Link>
            </div>
          </div>
        </div></>
  )
}

export default Productbtn