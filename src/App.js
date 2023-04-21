import "./App.css";
import React, { useState } from "react";

function App() {
  let [value, setValue] = useState(0);
  let [countValue, setCountValue] = useState(0);

  const handelStart = () => {
    if ((countValue = 0)) {
      alert("Please enter a positive number");
    }
    setInterval(() => {
      if (value > -1) {
        setCountValue(value--);
      }
    }, 100);
    setValue("");
  };

  return (
    <div className="App App-header">
      <h1>CountDown App</h1>
      <input
        className="inptSyl"
        type="text"
        placeholder="Enter Positive Number"
        onChange={(e) => {
          setValue(+e.target.value);
        }}
      />
      <button className="btn" onClick={() => handelStart()}>
        Start
      </button>
      <h2>{countValue}</h2>
    </div>
  );
}

export default App;
