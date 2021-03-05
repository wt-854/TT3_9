import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Line } from "react-chartjs-2";

const ViewAsset = () => {
  let xapikey = "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m";
  let viewAssetPriceUrl =
    "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current";
  let chartUrl =
    "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical";

  const [assetSymbol, setAssetSymbol] = useState("");
  const [price, setPrice] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [ts, setTs] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const arr = [];

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

  const getHistoricalPricing = async () => {
    await fetch(chartUrl, {
      method: "POST",
      headers: { "x-api-key": xapikey },
    })
      .then((response) => {
        response.json().then((body) => {
          body.map((entry) => {
            arr.push(entry.price);
          });
          // console.log(body);

          // setChart(body);
          // console.log(chart);
        });
        setDataArray(arr.slice(0, 100));
        // console.log(dataArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  getViewAsset();
  getHistoricalPricing();

  const data = {
    labels: ["25", "50", "75", "100"],
    datasets: [
      {
        label: "Price chart of past 100 prices",
        data: dataArray,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            max: 30,
            min: 20,
          },
        },
      ],
    },
  };

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
      <br />
      {data ? (
        <Line data={data} options={options} />
      ) : (
        "Unable to access API for data"
      )}
    </div>
  );
};

export default ViewAsset;
