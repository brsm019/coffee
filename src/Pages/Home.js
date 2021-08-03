import React from "react";
import CardForm from "../Components/Card/CardForm";
import Header from "../Components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CardForm />
    </div>
  );
};

export default Home;
