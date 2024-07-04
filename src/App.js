import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const gotClicked = (e) => {
    const buttonValue = e.target.name;
    if (buttonValue === "=") {
      try {
        setResult(eval(value).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (buttonValue === "C") {
      setValue("");
      setResult("");
    } else {
      setValue((prevValue) => prevValue + buttonValue);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>React Calculator</h1>
      <input type="text" value={value} readOnly />
      <div>{result}</div>
      <div
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "5px",
          padding: "5px",
        }}
      >
        <button className="btn" name="7" onClick={gotClicked}>
          7
        </button>
        <button className="btn" name="8" onClick={gotClicked}>
          8
        </button>
        <button className="btn" name="9" onClick={gotClicked}>
          9
        </button>
        <button className="btn" name="+" onClick={gotClicked}>
          +
        </button>
        <button className="btn" name="4" onClick={gotClicked}>
          4
        </button>
        <button className="btn" name="5" onClick={gotClicked}>
          5
        </button>
        <button className="btn" name="6" onClick={gotClicked}>
          6
        </button>
        <button className="btn" name="-" onClick={gotClicked}>
          -
        </button>
        <button className="btn" name="1" onClick={gotClicked}>
          1
        </button>
        <button className="btn" name="2" onClick={gotClicked}>
          2
        </button>
        <button className="btn" name="3" onClick={gotClicked}>
          3
        </button>
        <button className="btn" name="*" onClick={gotClicked}>
          *
        </button>
        <button className="btn" name="C" onClick={gotClicked}>
          C
        </button>
        <button className="btn" name="0" onClick={gotClicked}>
          0
        </button>
        <button className="btn" name="=" onClick={gotClicked}>
          =
        </button>
        <button className="btn" name="/" onClick={gotClicked}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
