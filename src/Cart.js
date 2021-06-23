import React, { useState } from "react";
import "./Cart.css";
import Header from "./Header";
import axios from "axios";

const Cart = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");
  const [peeps, setPeeps] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleInfo = (e) => {
    setInfo(e.target.value);
  };

  const handleSubmit = () => {
    const postURL = "http://localhost:4000/api/test/"; //Our previously set up route in the backend
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // We should keep the fields consistent for managing this data later
        name: name,
        address: address,
        info: info,
      }),
    }).then(() => {
      // Once posted, the user will be notified
      alert("You have been added to the system!");
    });
  };

  const handleClick = async () => {
    const getURL = "http://localhost:4000/api/test";
    const response = await axios.get(getURL);
    setPeeps(response.data);
  };

  console.log(peeps);
  console.log(name, address, info);

  return (
    <div className="cart">
      <Header />
      <h1>Cart This</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input value={name} onChange={handleName} />
          <label>Address</label>
          <input value={address} onChange={handleAddress} />
          <label>Info</label>
          <input value={info} onChange={handleInfo} />
          <button type="submit">Enter</button>
        </form>
      </div>
      <button onClick={handleClick}>Get all peeps</button>
      <div>
        {peeps.map((peep) => {
          return (
            <ul key={peep._id} style={{ color: "black" }}>
              <li>{peep.name}</li>
              <li>{peep.address}</li>
              <li>{peep.info}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
