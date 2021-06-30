import React, { useState } from "react";
import "./Cart.css";
import Header from "./Header";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

//Need to make pages only accessible when logged in - Just cart
//Go into cart, see if you can access localstorage from there
//If not, create useReducer, context api and pass login state
//if(login){render page}else{redirect to login screen}

//Create 404 page for random routes that aren't specified
//Create PrivateRoute file, pass in localStorage information, as seen in this page

/* 

By clicking login without any credentials, it sets auth and login to true?
Need to use token, watch video on it
Get router working first

*/

const Cart = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");
  const [peeps, setPeeps] = useState([]);

  const rememberMe = localStorage.getItem("auth") === "true";
  let login = localStorage.getItem("login");
  let auth = localStorage.getItem("auth") === "true";
  console.log({ rememberMe });
  console.log({ auth });

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

  // console.log(peeps);
  // console.log(name, address, info);
  // console.log({ auth });
  // if (auth !== true) {
  //   history.push("/login");
  // }
  console.log({ auth });
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
