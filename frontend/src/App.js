import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [mood, setMood] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeMood = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setMood(null);
    setConfidence(null);

    try {
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
    } catch (error) {
      console.error("Error:", error);
      setMood("Error");
      setConfidence(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}>
      <h1>🧠 AI Mood Analyzer</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you feeling?"
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <br /><br />

      <button
        onClick={analyzeMood}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white"
        }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {mood && (
        <div style={{ marginTop: "20px" }}>
          <h2>Result: {mood}</h2>
          {confidence && <p>Confidence: {confidence}%</p>}
        </div>
      )}
    </div>
  );
}

export default App;
