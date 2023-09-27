import { Routes, Route, Link } from 'react-router-dom'
import SiteHeader from './componets/Header/Header';
import Main from './componets/Main/Main.js';
import DescriptCard from './componets/DescriptCard/DescriptCard.js';
import Photo from './componets/Gallery/Gallery.js';
import TimeTable from './componets/TimeTable/TimeTable.js';
import Trainers from './componets/Trainers/Trainers.js';
import Price from './componets/Price/Price.js';
import News from './componets/News/News.js';
import Footer from './componets/Footer/Footer.js';
import NotFound from './componets/NotFoundPage/Page404.js'






const App = () => {
  return (
    <div>
    <SiteHeader />
    <Main/>
    <DescriptCard id="services"/>
    <Photo/>
    <TimeTable id="time"/>
    <Trainers id="trainers"/>
    <Price/>
    <News id="news"/>
    <Footer/>
  </div>
  );
}





export default App;
