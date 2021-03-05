import React, {useState, useEffect} from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import axios from 'axios'

function TransactionHistory() {
    const[number, setNumber] = useState("")

    const[transactionId, setTransactionId] = useState ("")
    const[orderType, setOrderType] = useState ("")
    const[assetSymbol, setAssetSymbol] = useState("")
    const[assetAmount, setAssetAmount] = useState("")
    const[assetPrice, setAssetPrice] = useState("")
    const[cashAmount, setCashAmount] = useState("")


    const fetchbal = () => {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', {
            accountKey: "3afbb5b2-9cb3-4013-bbc9-654e5921f6c3"
        }, 
        {headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "X-Api-key": "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m"}})
        .then((response) => {
            console.log(response);
            setTransactionId(response.data[0].transactionId);
            setOrderType(response.data[0].orderType);
            setAssetSymbol(response.data[0].assetSymbol);
            setAssetAmount(response.data[0].assetAmount);
            setAssetPrice(response.data[0].assetPrice);
            setCashAmount(response.data[0].cashAmount);
        }).catch((error) => {
            // windows.alert(error);
            console.log(error);
        })
    };

    return (
        <>
        <Navbar />

        <h1>Transaction History</h1>
        <div>
                
                <div>
                    Transaction ID: {transactionId}
                </div>
                <div>
                    Order Type: {orderType}
                </div>
                <div>
                    Asset Symbol: {assetSymbol}
                </div>
                <div>
                    Asset Amount: {assetAmount}
                </div>
                <div>
                    Asset Price: ${assetPrice}
                </div>
                <div>
                    Cash Amount: ${cashAmount}
                </div>
        </div>
        <button className="button" onClick={fetchbal}>Get History Details</button>
        <Footer/>
        </>
    );
}

export default TransactionHistory;