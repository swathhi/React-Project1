import './App.css';
import * as React from 'react';
import Home from "./Home";
import {BrowserRouter} from "react-router-dom"



function App() {
  return (
   <div>
   <BrowserRouter>
   <Home />
   </BrowserRouter>
   </div>
   
   
  );
}

export default App;