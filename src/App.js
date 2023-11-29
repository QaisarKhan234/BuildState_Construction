import './App.css';
import BrandsSlider from './components/BrandsSlider';
import MyCarousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Listingpage from './components/Listingpage';
import MyCard from './components/MyCard';
import SmallSlider from './components/SmallSlider';
import StepPage from './components/StepPage';
import Team from './components/Team';
import Yellopage from './components/Yellopage';
import YellowPage2 from './components/YellowPage2';



function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <MyCarousel/>
        <SmallSlider/>
        <MyCard />
        <Yellopage/>
        <StepPage/>
        <YellowPage2/>
        <Listingpage/>
        <Team/>
        <BrandsSlider/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
