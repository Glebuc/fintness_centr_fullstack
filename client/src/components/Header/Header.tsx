import { Link } from "react-scroll";
import { StickyContainer, Sticky } from 'react-sticky';
import React from 'react';
import './../../index.css';
import Logo from './Logo';
import Navigation from "./Navigation";


const SiteHeader:React.FC = () => {
return (
  <header aria-label="Site Header" className="bg-gray-800">
  <div
    className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
  >
    <Logo />

    <Navigation />
  
  </div>
</header>

);
};

export default SiteHeader;

