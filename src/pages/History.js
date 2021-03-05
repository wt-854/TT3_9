import React from "react";

export default function History() {
  let xapikey = "Jkx76CEYnp3NaTpwSXceo4ONDFLJNZcA717hzo1m";
  let url =
    "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical";

  const [history, setHistory] = React.useState([{ price: 1 }]);

  const getHistory = async () => {
    await fetch(url, {
      method: "POST",
      headers: { "x-api-key": xapikey },
    }).then((response) => {
      response.json().then((body) => {
        setHistory(body.reverse());
      });
    });
  };

  const [show, setShow] = React.useState(false);

  const table = show ? (
    <table cellPadding="5">
      <tr>
        <th>timestamp (in epoch)</th>
        <th>asset symbol</th>
        <th>price</th>
      </tr>
      {history.map((e) => {
        const date = new Date(e.timestamp);
        return (
          <tr>
            <td>
              {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
            </td>
            <td>{e.assetSymbol}</td>
            <td>{e.price}</td>
          </tr>
        );
      })}
    </table>
  ) : null;

  const handleClick = () => {
    setShow(true);
    getHistory();
  };

  return (
    <div>
      <button onClick={handleClick}>
        {show ? "Update" : "Retrieve"} history
      </button>
      {table}
    </div>
  );
}
