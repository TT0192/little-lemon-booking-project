import logo from './Logo.svg'; // Assuming the logo file is in the same directory

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="" className="logo"/>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/menu">Menu</a></li>
        <li className="nav-item"><a href="/reservation">Reservation</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;