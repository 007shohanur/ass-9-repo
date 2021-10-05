import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" p-4 bg-info">
            <div></div>
           
          <ul className="d-flex justify-content-end ">
            
              <Link className="text-decoration-none text-white p-3" to="/">Home</Link>
            
            
              <Link className="text-decoration-none text-white p-3" to="/about">About</Link>
            
            
              <Link className="text-decoration-none text-white p-3" to="/teachers">Teachers</Link>
        
            
              <Link className="text-decoration-none text-white p-3" to="/services">Services</Link>
            
          </ul>
      
        </div>
    );
};

export default Header;