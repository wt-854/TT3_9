import React, {useState, useEffect} from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import axios from 'axios'

function CashWallet() {
    
    const[assetBalance, setAssetBalance] = useState ("")
    const[cashBalance, setCashBalance] = useState("")

    const fetchbal = () => {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', {
            accountKey: "3afbb5b2-9cb3-4013-bbc9-654e5921f6c3"
        }, 
        {headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            // "Access-Control-Allow-Origin": "*",
            "X-Api-key": "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m"}})
        .then((response) => {
            console.log(response.data);
            setAssetBalance(response.data.assetBalance);
            setCashBalance(response.data.cashBalance);
        }).catch((error) => {
            // windows.alert(error);
            console.log(error);
        })
    };

    return (
        <>
        <Navbar />
        <h1>Cash Balance and Asset Balance</h1>
        <div>
                <div>
                    Asset Balance: $ {assetBalance}
                </div>
                <div>
                    Cash Balance: $ {cashBalance}
                </div>
        </div>
        <button className="button" onClick={fetchbal}>Get Details</button>
        <Footer/>
        </>
    );
}

export default CashWallet;