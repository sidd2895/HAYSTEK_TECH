import logo from './logo.svg';
import './App.css';

function App() {
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

      <div style={{ textAlign: "center", color: "white" }}>
        <span>
          Currently 3 people showing
        </span>
      </div>
    </div>
  );
}

export default App;
