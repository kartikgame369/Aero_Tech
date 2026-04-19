import React from 'react';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Body() {
    return(
        <div>
              <NavBar/>
              <main>
                <Outlet />
              </main>
              <Footer />
        </div>
    )
}

export default Body;