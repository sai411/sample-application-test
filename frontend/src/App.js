import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleCall = async () => {
    try {
      const res = await fetch(`http://localhost:3000/start/${input}`);
      const data = await res.json();
      setResult(JSON.stringify(data));
    } catch (err) {
      setResult("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Frontend → API → Java → Python</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleCall}>Send</button>
      <pre>{result}</pre>
    </div>
  );
}

export default App;
