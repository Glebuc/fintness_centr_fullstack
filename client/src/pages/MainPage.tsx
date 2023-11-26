import React from 'react'
import SiteHeader from '../components/Header/Header';
import MainCover from '../components/Main/Main';
import DescriptCardList from '../components/DescriptCard/DescriptCardList';
import Photo from '../components/Gallery/Gallery';
import TimeTable from '../components/TimeTable/TimeTable';
import Trainers from '../components/Trainers/Trainers';
import Price from '../components/Price/Price';
import News from '../components/News/News';
import Footer from '../components/Footer/Footer';

const Main = () => (
    <div>
        <SiteHeader />
        <MainCover/>
        <DescriptCardList id="services"/>
        <Photo/>
        <TimeTable id="time"/>
        <Trainers id="trainers"/>
        <Price/>
        <News id="news"/>
        <Footer/>
    </div>
    )


export default Main;