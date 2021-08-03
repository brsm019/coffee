import React from "react";
import CardForm from "./CardForm";
import Header from "./Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CardForm />
      <h4 className="title">Buy some coffee</h4>
    </div>
  );
};

export default Home;
