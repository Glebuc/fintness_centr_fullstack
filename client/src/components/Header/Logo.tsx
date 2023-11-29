import { Link } from "react-router-dom";
import React from 'react';
import './../../index.css'


const Logo:React.FC = () => {
return (
    <div className="flex items-center gap-4">
      <div className='logo'>
        <Link to="/">
          <img src="/img/logo.svg" className="w-10 cursor-pointer" alt="" />
        </Link>
        </div>
    </div>
);
};

export default Logo;

