import React from "react";
import { useState } from 'react'
import './App.css'
import Counter from "./components/Counter.jsx";
import Dog from "./components/Dog.jsx";
import FixedComponent from "./components/FixedComponent.jsx"


function App() {
  return (
    <div>
      Hello, I'm an App!
      <FixedComponent />
      <Dog name='Eddie' isAdopted  />
    </div>
  );
}


export default App
