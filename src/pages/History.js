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
        setHistory(body);
      });
    });
  };

  getHistory();

  return (
    <div>
      <p>hi</p>
      <ul>
        {history.map((e) => {
          <li>{e.price}</li>;
        })}
      </ul>
    </div>
  );
}
