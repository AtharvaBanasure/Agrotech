import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Getstarted from "./components/Getstarted";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <Getstarted/>
      <WhyChooseUs/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </> 
  );
}

export default App;
