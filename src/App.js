import React from "react";
import Profile from "./component/Profil/profile.js";
import Address from "./component/Profil/Address.js";
import FullName from "./component/Profil/FullName.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile/>
      <FullName/>
      <Address/>
      
    </div>
  );
}

export default App;
