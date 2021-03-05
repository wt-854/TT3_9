import React, {useState, useEffect} from 'react';
import '../../App.css';
// import Cards from '../Cards';
// import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';
import axios from 'axios'

function CashWallet() {
    
    // const[assetBalance, setAssetBalance] = ("")
    // const[cashBalance, setCashBalance]

    return (
        <>
        <Navbar />
        {/* <HeroSection /> */}
        {/* <Cards /> */}
        <h1>Cash Balance and Asset Balance</h1>
        <Footer/>
        </>
    );
}

export default CashWallet;