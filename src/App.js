import React from "react";
import "./App.css";
import Nasa from './components/Nasa';
//axios request is in Nasa.js

function App() {
  return (
    <div className="App">
      <div>
        <Nasa />
      </div>
    </div>
  );
}

export default App;
