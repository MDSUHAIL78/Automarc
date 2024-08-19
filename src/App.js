import './App.css';
import AutoMarcWallpaper from './components/Wallpaper';
import OurWorks from './components/OurWork';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Blog from './components/Blog';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <div>

      <Header/>
      
      <Navbar/>

      <Carousel/>

      <Blog/>

      <OurWorks/>

      <AutoMarcWallpaper/>

      <AboutUs/>

      <ContactForm/>

    </div>
  );
}
