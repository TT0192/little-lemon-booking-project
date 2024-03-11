import './App.css';
import React from "react";
import Footer from './FooterL.js';
import NavigationBar from './Nav.js';
import Main from './Main.js';


function App() {

    return (
           <div>
              <React.Fragment>
              <NavigationBar />
               <Main />
              <Footer />
              </React.Fragment>
              </div>

          );

}

export default App;
