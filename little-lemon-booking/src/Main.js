import Header from './Header';
import { Route, Routes} from "react-router-dom";
import React from "react";



export default function Main() {

 return(
      <main>
          <Routes>
              <Route path="/" element={<Header />} />
          </Routes>
      </main>

  )

}
