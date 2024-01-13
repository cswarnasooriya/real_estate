import React from 'react'
import "./sponser.css";
import logo1 from '../../Assets/logo1.1.png';
import logo2 from '../../Assets/logo1.2.png';
import logo3 from '../../Assets/logo1.3.png';
import logo4 from '../../Assets/logo1.4.png';

const Sponser = () => {
  return (
    <div className='sponsers'>
      <div className="secContainer flex">

        <span>
          <img src={logo1} alt="Logo Image" />
        </span>
        <span>
          <img src={logo2} alt="Logo Image" />
        </span>
        <span>
          <img src={logo3} alt="Logo Image" />
        </span>
        <span>
          <img src={logo4} alt="Logo Image" />
        </span>
     
      </div>
      
    </div>
  );
}

export default Sponser
