import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CakeComponent from "./features/cake/cakeView";
import IcecreamComponent from "./features/icecream/icecreamView";
import UserComponent from "./features/user/userView";

function App() {
  return (
    <div className="App">
      <CakeComponent />
      <IcecreamComponent />
      <UserComponent />
    </div>
  );
}

export default App;
