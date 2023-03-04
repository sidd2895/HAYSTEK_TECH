import './App.css';
import personData from "./data.json";

function App() {

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
        >
          Next Person
        </button>
      </div>

      {personData.map((item, index) => {
        return (
          <div key={`${item.name}` - `${item.location}`}>
            {personItem(item, index)}
          </div>
        );
      })}

      <div style={{ textAlign: "center", color: "white" }}>
        <span>
          Currently 3 people showing
        </span>
      </div>
    </div>
  );
}

export default App;
