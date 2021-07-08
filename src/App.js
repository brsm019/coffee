import React, { useEffect } from "react";
import "./App.css";
import { useStateValue } from "./GlobalState/StateProvider";
import Home from "./Home";
import SideBar from "./SideBar";

function App() {
  // let auth = localStorage.getItem("auth") === '{"auth":true}';
  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //   console.log("The user is >>>", auth);

  //   if (auth) {
  //     dispatch({
  //       type: "SET_USER",
  //       user: auth,
  //     });
  //   } else {
  //     dispatch({
  //       type: "SET_USER",
  //       USER: null,
  //     });
  //   }
  // }, []);

  return (
    <div className="app">
      <SideBar />

      {/* <Home /> */}
    </div>
  );
}

export default App;
