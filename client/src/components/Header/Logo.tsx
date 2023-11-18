import { Link } from "react-scroll";
import React from 'react';
import './../../index.css'


const Logo:React.FC = () => {
return (
    <div className="flex items-center gap-4">
      <div className='logo'>
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
          <img src="/img/logo.svg" alt="" />
        </Link>
        </div>
    </div>
);
};

export default Logo;

