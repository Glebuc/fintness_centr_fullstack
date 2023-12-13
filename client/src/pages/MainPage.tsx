import React from 'react'
import SiteHeader from '../components/Header/Header';
import MainCover from '../components/Main/Main';
import DescriptCardList from '../components/DescriptCard/DescriptCardList';
import Photo from '../components/Gallery/Gallery';
import SectionTimeTable from '../components/TimeTable/SectionTimeTable';
import Trainers from '../components/Trainers/Trainers';
import Price from '../components/Price/Price';
import News from '../components/News/News';
import Footer from '../components/Footer/Footer';

const Main = () => (
    <div>
        <MainCover/>
        <DescriptCardList id="services"/>
        <Photo/>
        <SectionTimeTable />
        <Trainers/>
        <Price/>
        <News id="news"/>
    </div>
    )


export default Main;