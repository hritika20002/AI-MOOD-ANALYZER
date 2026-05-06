import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [mood, setMood] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const analyzeMood = async () => {
const res = await fetch("https://ai-mood-analyzer.onrender.com/predict", {
  method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setMood(data.mood);
    setConfidence(data.confidence);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>AI Mood Analyzer</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you feeling?"
        style={{ padding: "10px", width: "300px" }}
      />

      <br /><br />

      <button onClick={analyzeMood}>
        Analyze
      </button>

      {mood && (
        <div style={{ marginTop: "20px" }}>
          <h2>{mood}</h2>
          <p>Confidence: {confidence}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
