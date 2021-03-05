import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
// import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      {/* <Cards /> */}
      <h1>Welcome User</h1>
      <Footer/>
    </>
  );
}

export default Home;
