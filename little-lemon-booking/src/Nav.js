import logo from './Logo.svg'; // Assuming the logo file is in the same directory
import { Link } from "react-router-dom";

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
    </div>
  );
}

export default NavigationBar;