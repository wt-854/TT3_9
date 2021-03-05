import React,{ useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function Transact(props) {
    // Use it to store payload data
    const [trans, setTrans] = useState({});
    // Get price of asset
    const [currentPrice, setCurrentPrice] = useState();

    useEffect(() => {
      const response = { status: 200 }
      if(response.status !== 200){
        redirectToLogin();
      }
      
      setTrans({
        accountKey: "3afbb5b2-9cb3-4013-bbc9-654e5921f6c3",
        orderType: "",
        assetAmount: 0
      });
    })

    // // Login and Logout
    // const redirectToLogin = () => {
    //     props.history.push('/');
    //   }

    // const logoutHandler = () => {
    //   localStorage.removeItem('login_access_token');
    //   redirectToLogin();
    // }

    // to get stock price
    // const getStockPrice = () => {
    //   const hasStockCode = stockData.filter(i => i.stockCode === stock.stockCode);
    //   if (hasStockCode.length > 0) {
    //     return hasStockCode[0].price;
    //   }
    //   return null;
    // }
    
    // Submit Transaction
    const onTransact = () => {
      axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', trans, {
        headers: {
            'x-api-key': `Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m`
          }
        })
        .then(res => {
            if (res.status !== 200) {
                throw new Error('Payload not posted!');
            }                
            console.log(res);
            redirectToHome();
        })
        .catch(err => {
            console.log(err);
        }) 
    }

    const handleChange = (e) => {
      const {name , value} = e.target;
      setTrans({
          [name] : value
      })
    }

    // const handleChange = (e) => {
    //   const {name , value} = e.target;
    //   setTrans(prevState => ({
    //       ...prevState,
    //       [name] : value
    //   }))
    // }

    // Get Asset Price
    // const currentAssetPrice = () => {
    //     axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current', {
    //         headers: {
    //             'x-api-key': `Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m`
    //         } 
    //     })
    //         .then(res => setStockData(res)
    //         .catch(err => console.log(err))
    // }
    // <button onClick={logoutHandler}>Logout!</button>
    // <div> Balance: ${balance}</div>
    // <small>Current Price: ${currentAssetPrice}</small>

    return(
      <>
        <div>
          <div>
            <div> <h5>Buy or Sell TTK </h5></div>
          </div>
          <form>
              <label for="price">Order Type: </label>
              <input type="text" name="orderType" onChange={handleChange} /><small>BUY or SELL</small><br></br>
              <label for="price">assetAmount: </label>
              <input type="number" required name="assetAmount" onChange={handleChange} /> <br></br>
              <button type="button" class="btn btn-secondary" onClick={() => onTransact()}>Submit</button>
            </form>
        </div>
    </>
    )
}

export default withRouter(Transact);

