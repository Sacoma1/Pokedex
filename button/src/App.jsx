import { useState, useEffect } from "react";

import "./global.css";
import Fetch from './components/Fetch'
import Pokedex from "./components/Pokedex";

function App() {


  return (
    <>
    
    <Fetch/>
    <Pokedex/>
    </>
  );
}

export default App;
