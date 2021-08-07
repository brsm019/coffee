import React from "react";
import "./App.css";
import SideBar from "./Pages/SideBar";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51IyCkCGDpXfgd5NmOHuT8e4kjdQzVsiCukFamLb38M3B7U6wO2Dny52ihaIBs73pfIrhvgl3FzmtSqRqfiNzwtjO00PBSfGMJE"
);

function App() {
  return (
    <div className="app">
      <Elements stripe={promise}>
        <SideBar />
      </Elements>
    </div>
  );
}

export default App;
