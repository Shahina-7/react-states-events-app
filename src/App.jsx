import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Welcome Student");
  const [isChanged, setIsChanged] = useState(false);

  const handleClick = () => {
    setMessage("Welcome to React");
    setIsChanged(true);
    console.log("Button clicked");
  };

  return (
    <div className="container">
      <h2>States and Events</h2>

      <div className={isChanged ? "newBackground" : "oldBackground"}>
        <p>{message}</p>
      </div>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;