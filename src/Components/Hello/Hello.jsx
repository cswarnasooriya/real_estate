import React from 'react'
import "./hello.css"
import { CiLocationOn } from "react-icons/ci";


//import images

import img1 from '../../Assets/home.png';

const Hello = () => {
  return (
    <div className='hello'>
      <div className="secContainer container flex">
        <div className="textDiv">
          
          <h1>Discover Your Most Suitable Property</h1>
          <p>
            Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you...!
          </p>


          <div className="searchBar flex">
            <div className="inputBox flex">
              <CiLocationOn className="icon"/>
              <input type="text" placeholder='Search by location' />
            </div>
            <button className='btn'>Search</button>

          </div>

          <div className="numbers flex">
              <div className="singleNumber">
                <span>
                  9K <blockquote>+</blockquote>
                </span>
                <small>Premiun Product</small>
              </div>


              <div className="singleNumber">
                <span>
                  2K <blockquote>+</blockquote>
                </span>
                <small>Happy Customers</small>
              </div>


              <div className="singleNumber">
                <span>
                  48K <blockquote>+</blockquote>
                </span>
                <small>Awards Winning</small>
              </div>

            </div>
        </div>
        <div className="imgDiv">
          <img src={img1} alt="hello image" />
        </div>
      </div>
      
    </div>
  )
}

export default Hello
