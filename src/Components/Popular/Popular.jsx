import React from 'react';
import "./popular.css"

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

//images
import image1 from '../../Assets/image4.jpg';
import image2 from '../../Assets/image3.jpg';
import image3 from '../../Assets/image5.jpg';


const Popular = () => {
  return (
    <div className='popular container section'>
        <div className="secContainer">
            <div className="secHeader flex">
                <div className="textDiv">
                    <span className='orangeText'>
                        Best Choice
                    </span>

                    <h1 className='title'>Popular Residences
                    <span className='orangeDot'>.</span>
                    </h1>
                </div>

                <div className="icons flex">
                    <FaArrowLeft className='icon'/>
                    <FaArrowRight className='icon'/>   
                </div>
            
            </div>

            <div className="secContent grid">


            {/*House 1 */}
                <div className="singleProperty">
                    <div className="imgDiv">
                        <img src={image1} alt="House Image" />
                    </div>

                    <div className="info">
                        <span className="price">
                            <span className="orangeText">
                                LKR
                            </span>
                            <span className="digits">
                                 325,500
                            </span>
                        </span>
                        <h2 className="name">Enjoy Life in Jaffna</h2>
                        <p>
                            A stunning penthouse with skyline view and private terrace.
                        </p>
                    </div>
                </div>


                    {/*House 2 */}
                <div className="singleProperty">
                    <div className="imgDiv">
                        <img src={image2} alt="House Image" />
                    </div>

                    <div className="info">
                        <span className="price">
                            <span className="orangeText">
                                LKR
                            </span>
                            <span className="digits">
                                210,850
                            </span>
                        </span>
                        <h2 className="name">Mountlevenia Rural Relax</h2>
                        <p>
                            A enjoying life with skyline view and holiday terrace.
                        </p>
                    </div>
                </div>

                {/*House 3 */}
                <div className="singleProperty">
                    <div className="imgDiv">
                        <img src={image3} alt="House Image" />
                    </div>

                    <div className="info">
                        <span className="price">
                            <span className="orangeText">
                                LKR
                            </span>
                            <span className="digits">
                                155,200
                            </span>
                        </span>
                        <h2 className="name">BeachSide Heritage Global</h2>
                        <p>
                            A marvel cityside and tour location in holiday benches.
                        </p>
                    </div>
                </div>
         </div>
    
    </div>
      
  </div>
  );
};

export default Popular;
