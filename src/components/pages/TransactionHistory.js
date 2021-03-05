import React, {useState, useEffect} from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import axios from 'axios'

function TransactionHistory() {
    const[transHistory, setTransHistory] = useState([])

    // const[transactionId, setTransactionId] = useState ("")
    // const[orderType, setOrderType] = useState ("")
    // const[assetSymbol, setAssetSymbol] = useState("")
    // const[assetAmount, setAssetAmount] = useState("")
    // const[assetPrice, setAssetPrice] = useState("")
    // const[cashAmount, setCashAmount] = useState("")


    const fetchHist = () => {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', {
            accountKey: "3afbb5b2-9cb3-4013-bbc9-654e5921f6c3"
        }, 
        {headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "X-Api-key": "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m"}})
        .then((response) => {
            console.log(response);
            setTransHistory(response.data);
            // setTransactionId(response.data[0].transactionId);
            // setOrderType(response.data[0].orderType);
            // setAssetSymbol(response.data[0].assetSymbol);
            // setAssetAmount(response.data[0].assetAmount);
            // setAssetPrice(response.data[0].assetPrice);
            // setCashAmount(response.data[0].cashAmount);
        }).catch((error) => {
            // windows.alert(error);
            console.log(error);
        })
    };

    const table = (
        <table cellPadding="5">
          <tr>
            <th>Transaction ID</th>
            <th>Order Type</th>
            <th>Asset Symbol</th>
            <th>Asset Amount</th>
            <th>Asset Price</th>
            <th>Cash Amount</th>
          </tr>
          {transHistory.map((e) => {
            return (
              <tr>
                <td>{e.transactionId}</td>
                <td>{e.orderType}</td>
                <td>{e.assetSymbol}</td>
                <td>{e.assetAmount}</td>
                <td>{e.assetPrice}</td>
                <td>{e.cashAmount}</td>
              </tr>
            );
          })}
        </table>
      );

    return (
        <>
        <Navbar />

        <h1>Transaction History</h1>
        <div>
                {table}
                {/* <div>
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
                </div> */}
        </div>
        <button className="button" onClick={fetchHist}>Get History Details</button>
        <Footer/>
        </>
    );

}

export default TransactionHistory;