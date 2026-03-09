import "./Navbar.css";
import logo from "./assets/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#tours">Tours</a></li>
        <li><a href="#trekking">Trekking</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;