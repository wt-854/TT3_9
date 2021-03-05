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
        console.log(body);
        setHistory(body.reverse());
      });
    });
  };

  const [show, setShow] = React.useState(false);

  const table = show ? (
    <table>
      <tr>
        <th>price</th>
        <th>something else</th>
      </tr>
      {history.map((e) => {
        return (
          <tr>
            <td>{e.price}</td>
            <td>idk</td>
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
      <p>hi</p>
      <button onClick={handleClick}>Retrieve history</button>
      {table}
    </div>
  );
}
