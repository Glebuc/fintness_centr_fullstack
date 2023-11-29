import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteHeader from "../Header/Header";
import Footer from "../Footer/Footer";


export default function Layout() {
  return (<>
        <SiteHeader/>
        <Outlet/>
        <Footer/>
    </>
  )
}
