import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/Hospital logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className=" bg-info">
          <div>
              
          <ul className="d-flex justify-content-between pt-3 pb-3">

          <img src={image} className="logo justify-content-start" alt="" /> 
          
           <div className=" justify-content-end ms-5 pt-2 ">

           <Link className="text-decoration-none text-white p-3" to="/">Home</Link>
          
          
          <Link className="text-decoration-none text-white p-3" to="/about">About</Link>
        
        
          <Link className="text-decoration-none text-white p-3" to="/contact">Contact</Link>
    
        
          <Link className="text-decoration-none text-white p-3" to="/services">Services</Link>
           </div>
          
        </ul>
    
          </div>
        </div>
    );
};

export default Header;