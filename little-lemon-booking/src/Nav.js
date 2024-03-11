import logo from './Logo.svg'; // Assuming the logo file is in the same directory
import {Routes, Route, Link } from "react-router-dom";
import Main from './Main.js';
import About from './About.js';
import Menu from './Menu.js';
import Reservation from './Reservation.js';
import Order from './Order.js';
import Login from './Login.js';

const NavigationBar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="" className="logo"/>
      </div>
      <ul className="navbar-nav">
        <li><Link to="/" className="nav-item"><h3>HOME</h3></Link></li>
        <li><Link to="/about" className="nav-item"><h3>ABOUT</h3></Link></li>
        <li><Link to="/menu" className="nav-item"><h3>MENU</h3></Link></li>
        <li><Link to="/reservation" className="nav-item"><h3>RESERVATION</h3></Link></li>
        <li><Link to="/order" className="nav-item"><h3>ORDER ONLINE</h3></Link></li>
        <li><Link to="/login" className="nav-item"><h3>LOGIN</h3></Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default NavigationBar;