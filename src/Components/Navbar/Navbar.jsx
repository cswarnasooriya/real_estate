import React, { useState } from 'react'
import "./navbar.css"
import { SiHomeassistant } from "react-icons/si";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";



const Navbar = () => {
  
  const [menu, setMenu] = useState('menu')

  //function to show navbar
  const shownavbar = ()=>{
    setMenu("shownavbar menu");
  };


  //function to close navbar
  const removenavbar = ()=>{
    setMenu("menu");
  };


  //function to add a background to the navbar on scroll

  const[transparent, setTransparent] = useState("navbar");
  const addBG = ()=>{
    if(window.scrollY >= 10) {
      setTransparent("navbar addBackground");
      

    }else{
      setTransparent("navbar");
    }

  };

  window.addEventListener("scroll", addBG);

  return (
    <div className={transparent}>
      <div className="logoDiv">
        <SiHomeassistant className="icon"/>
        <span>Dremz</span>
      </div>  
      

      <div className={menu}>
        <ul>
          <li className="navList">Property</li>
          <li className="navList">Services</li>
          <li className="navList">Product</li>
          <li className="navList">About Us</li>

        </ul>

        
        {/*icons to close navbar on small devices*/}
        <IoIosCloseCircleOutline className='icon closeIcon' onClick={removenavbar}/>
      </div>



      <button className='contactBtn btn'>Contact</button>
      {/*icons to open/show navbar on small devices*/}
      <TbGridDots className='icon menuIcon' onClick={shownavbar}/>



      
    </div>
  )
}

export default Navbar
