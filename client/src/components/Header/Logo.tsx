import { Link } from "react-scroll";
import React from 'react';
import './../../index.css'


const Logo:React.FC = () => {
return (
    <div className="flex items-center gap-4">
      <div className='logo'>
        <a href="/">
          <img src="/img/logo.svg" className="w-10 cursor-pointer" alt="" />
        </a>
        </div>
    </div>
);
};

export default Logo;

