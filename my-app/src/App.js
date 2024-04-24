import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Benefits from './Components/Benefits/Benefits';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Intern from './Components/Intern/Intern';
import Join from './Components/Join/Join';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Intern/>
    <Benefits/>
    <Join/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
