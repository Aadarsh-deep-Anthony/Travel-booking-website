import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Tours from "./components/Tours";
import Trekking from "./components/Trekking";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Tours/>
      <Trekking/>
      <About/>
      <Contact/><br/><br/>
      <Footer/>
    </div>
  );
}
export default App;