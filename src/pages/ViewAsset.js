import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const ViewAsset = () => {
  // take in accountKey later;

  let xapikey = "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m";
  let viewAssetPriceUrl =
    "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current";

  const [assetSymbol, setAssetSymbol] = useState("");
  const [price, setPrice] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [ts, setTs] = useState("");

  const getViewAsset = async () => {
    await fetch(viewAssetPriceUrl, {
      method: "POST",
      headers: { "x-api-key": xapikey },
    }).then((response) => {
      response.json().then((body) => {
        setAssetSymbol(body.assetSymbol);
        setPrice(body.price);
        setTimestamp(body.timestamp);
        let d = new Date(body.timestamp).toString();
        setTs(d);
      });
    });
  };

  getViewAsset();

  return (
    <div className='main-container'>
      <h1>View Current Pricing of Asset</h1>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Asset Symbol</th>
            <th>Price</th>
            <th>Timestamp</th>
            <th>Local DateTime</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{assetSymbol}</td>
            <td>${price}</td>
            <td>{timestamp}</td>
            <td>{ts}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ViewAsset;
