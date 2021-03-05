import React from "react";

export default function Info({}) {
  const info = {
    // for testing
    accountKey: "acctkey",
    firstName: "fname",
    lastName: "lname",
    nric: "nric",
    address: "addr",
    phoneNumber: "pno",
    email: "test@123.com",
  };
  const { firstName, lastName, nric, address, phoneNumber, email } = info;
  return (
    <div>
      <p>Hello {firstName}, here is your user information:</p>
      <table margin-left="10px" margin-right="auto">
        <tr>
          <th>First Name</th>
          <td>{firstName}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{lastName}</td>
        </tr>
        <tr>
          <th>NRIC</th>
          <td>{nric}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{address}</td>
        </tr>
        <tr>
          <th>Phone Number</th>
          <td>{phoneNumber}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{email}</td>
        </tr>
      </table>
    </div>
  );
}
