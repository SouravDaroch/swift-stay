import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
{/* Navbar  */}
     <Navbar/>
      
      {/* 2. Dynamic Content Area */}
      {/* 'flex-grow' ensures the footer stays at the bottom on short pages */}
      <main className="grow">
        <Outlet /> 
      </main>

      {/* 3. Global Footer */}

<Footer/>
    </div>
  );
};

export default Layout;