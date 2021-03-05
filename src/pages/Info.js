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
      <div>
        First Name: {firstName}
        <br />
        Last Name: {lastName}
        <br />
        NRIC: {nric}
        <br />
        Address: {address}
        <br />
        Phone Number: {phoneNumber}
        <br />
        Email: {email}
      </div>
    </div>
  );
}
