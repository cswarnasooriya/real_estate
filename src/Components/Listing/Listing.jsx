import React from 'react'
import "./listing.css";
import home from '../../Assets/home.jpg';

import { FaBed } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FaClover } from "react-icons/fa6";





const Listing = () => {
  return (
    <div className='listing container section'>
      <div className="secContainer">
        <div className="secHeader">
          <span className='orangeText'>Our Listing</span>
          <h1 className='title'>
            Buy And Sell Your Properties
            <span className='orangeDot'> .</span>
          </h1>
          <p>
            Your housing real estate agency is your key to uncovering hidden savings..!
          </p>

          <div className="btns flex">
            <button className='btn active'>Exclusive</button>
            <button className='btn active'>Standard</button>
          </div>
        </div>

        <div className="secContent grid">
          <div className="singleListing">
            <div className="imgDiv">
              <img src={home} alt="House Image" />
            </div>
            <div className="info">
              <h2 className="name">CountrySide Estate, Galle</h2>
              <span className='price'>
                <span className='digits'>325,000</span>
                <span className="orangeText"> LKR</span>
                <span className="duration">/Day</span>
              </span>

              <p>
                A great place for your living place as Galle, in the Bordeaux wine region, featuring vineyards in Sri Lanka..!
              </p>

              <div className="ammenities flex">
                <span className="flex">
                  <FaBed  className='icon'/>
                  <blockquote>x5</blockquote>
                </span>

                <span className="flex">
                  <FaSwimmer className='icon'/>
                  <blockquote>x5</blockquote>
                </span>

                <span className="flex">
                  <FaWifi className='icon'/>
                  <blockquote>x5</blockquote>
                </span>

                <span className="flex">
                  < MdFastfood  className='icon'/>
                  <blockquote>x5</blockquote>
                </span>

                <span className="flex">
                  <FaClover  className='icon'/>
                  <blockquote>x5</blockquote>
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Listing
