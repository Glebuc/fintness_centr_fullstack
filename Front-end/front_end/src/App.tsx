import { Routes, Route, Link } from 'react-router-dom'
import SiteHeader from './components/Header/Header';
import Main from './components/Main/Main';
import DescriptCard from './components/DescriptCard/DescriptCard';
import Photo from './components/Gallery/Gallery';
import TimeTable from './components/TimeTable/TimeTable';
import Trainers from './components/Trainers/Trainers';
import Price from './components/Price/Price';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFoundPage/Page404'






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
