import React,{ useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function Transact(props) {
    // Use it to store payload data
    const [stock, setStock] = useState({});
    // Get price of asset
    const [currentPrice, setCurrentPrice] = useState();


  const redirectToLogin = () => {
      props.history.push('/');
  }

  const logoutHandler = () => {
      localStorage.removeItem('login_access_token');
      redirectToLogin();
  }

  // to get stock price
  const getStockPrice = () => {
    const hasStockCode = stockData.filter(i => i.stockCode === stock.stockCode);
    if (hasStockCode.length > 0) {
      return hasStockCode[0].price;
    }
    return null;
  }

  const onTransact = () => {
   axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', payload, {
     headers: {
         'x-api-key': `Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m`
       }
     })
     .then(res => {
         if (res.status !== 200) {
             throw new Error('Payload not posted!');
         }                
         alert('Transaction is successful!')
         redirectToHome();
     })
     .catch(err => {
         console.log(err);
     }) 
  }

  const handleChange = (e) => {
    const {name , value} = e.target;
    setStock(prevState => ({
        ...prevState,
        [name] : value
    }))
  }

//   const payload = {
//     "email": state.email,
//     "password": state.password
// }

  // Post transaction
  //  axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', transactions, payload, {
  //    headers: {
  //        'x-api-key': `Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m`
  //      }
  //    })
  //    .then(res => {
  //        if (res.status !== 200) {
  //            throw new Error('Payload not posted!');
  //        }                
  //        alert('Transaction is successful!')
  //        redirectToHome();
  //    })
  //    .catch(err => {
  //        console.log(err);
  //    }) 
      
  //   Get Account Number
  //   const getAssetBalance = () => {
  //       axios.post('', payload, {
  //           headers: {
  //               'x-api-key': ``
  //           }
  //       })
  //           .then(res => setAsset(res)
  //           .catch(err => console.log(err))
  //   }

  //   Get Asset Price
  //   const currentAssetPrice = () => {
  //       axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current', payload, {
  //           headers: {
  //               'x-api-key': `Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m`
  //           } 
  //       })
  //           .then(res => setStockData(res)
  //           .catch(err => console.log(err))
  //   }
    

    return(
      <>
        <div className="mt-2">
          <div className="row">
            <div> Buy or Sell TTK </div>
            <div> Balance: ${balance}</div>
            <button onClick={logoutHandler}>Logout!</button>
          </div>
          <form>
              <label for="stock">Stock Code: </label>
              <input type="text" name="orderType" onChange={handleChange} /><small>BUY or SELL</small><br></br>
              <label for="price">Order Type: </label>
              <input type="number" required name="assetAmount" onChange={handleChange} /> <br></br>
              <label for="price">assetAmount: </label><small>Current Price: ${currentAssetPrice}</small><br></br>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => onTransact()}>Submit</button>
            </form>
        </div>
    </>
    )
}

export default withRouter(Transact);

