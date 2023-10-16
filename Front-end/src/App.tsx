import { Routes, Route, Link } from 'react-router-dom'
import SiteHeader from './componets/Header/Header';
import Main from './componets/Main/Main';
import DescriptCard from './componets/DescriptCard/DescriptCard';
import Photo from './componets/Gallery/Gallery';
import TimeTable from './componets/TimeTable/TimeTable';
import Trainers from './componets/Trainers/Trainers';
import Price from './componets/Price/Price';
import News from './componets/News/News';
import Footer from './componets/Footer/Footer';
import NotFound from './componets/NotFoundPage/Page404'






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
