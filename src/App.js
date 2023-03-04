import './App.css';
import personData from "./data.json";
import { useState } from "react";

function App() {
  const [pNum, setPNum] = useState(0);
  const [pSize, setPSize] = useState(3);

  const personItem = (item, index) => {
    return (
      <div style={{ display: "flex", marginBottom: "0.5rem" }}>
        <div className="index">
          <span>{index + 1}</span>
        </div>
        <div className="person">
          <span
            style={{
              padding: "0.5rem",
              backgroundColor: "lightblue",
              borderRadius: "0 0.5rem 0 0"
            }}
          >
            <b>Name: </b>
            {item.name}
          </span>
          <span
            style={{
              padding: "0.5rem"
            }}
          >
            <b>Location: </b>
            {item.location}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1>People Data</h1>
        <button
          className="button"
          onClick={() => {
            if (personData.length > pSize) {
              setPNum((prevVal) => prevVal + 3);
              setPSize((prevVal) => prevVal + 3);
            } else {
              alert("NO DATA");
            }
          }}
        >
          Next Person
        </button>
      </div>

      {personData.slice(pNum, pSize).map((item, index) => {
        return (
          <div key={`${item.name}` - `${item.location}`}>
            {personItem(item, index)}
          </div>
        );
      })}

      <div style={{ textAlign: "center", color: "white" }}>
        <span>
          Currently {personData.slice(pNum, pSize).length} people showing
        </span>
      </div>
    </div>
  );
}

export default App;
