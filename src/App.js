// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.js";
import Section1 from "./Components/Section1.js"
import Section2 from "./Components/Section2.js";
import Section3 from "./Components/Section3.js";
import Section4 from "./Components/Section4.js";
import Section5 from "./Components/Section5.js";
import Section6 from "./Components/Section6.js";
import Section7 from "./Components/Section7.js";
import Footer from "./Components/footer.js";
function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return ( 
  <>
  <Navbar scrollToSection={scrollToSection}/>
  <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>
  <Section6/>
  <Section7/>
  <Footer/>
  </>
  );
}

export default App;
