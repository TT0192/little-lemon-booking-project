import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Footer from './FooterL.js';
import NavigationBar from './Nav.js';
import Main from './Main.js';
import About from './About.js';
import Menu from './Menu.js';
import Reservation from './Reservation.js';
import Order from './Order.js';
import Login from './Login.js';
import ConfirmedBooking from './ConfirmedBooking.js';


function App() {

    return (
              <div>
                    <React.Fragment>
                      <NavigationBar />
                      <Main />
                      <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/reservation" element={<Reservation />} />
                        <Route path="/confirmed" element={<ConfirmedBooking /> } />
                        <Route path="/order" element={<Order />} />
                        <Route path="/login" element={<Login />} />
                      </Routes>
                      <Footer />
                    </React.Fragment>
                    
              </div>
          );

}

export default App;
