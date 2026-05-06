from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import pickle

app = Flask(__name__)

# Allow frontend to call backend (important for deployment)
CORS(app)

# Load model + vectorizer safely
model = pickle.load(open("model/model.pkl", "rb"))
vectorizer = pickle.load(open("model/vectorizer.pkl", "rb"))

@app.route("/")
def home():
    return jsonify({"message": "AI Mood Analyzer API is running"})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        if not data or "text" not in data:
            return jsonify({"error": "No text provided"}), 400

        text = data["text"]

        # Transform input
        vector = vectorizer.transform([text])

        # Predict
        prediction = model.predict(vector)[0]

        # Confidence score (if supported)
        confidence = None
        if hasattr(model, "predict_proba"):
            confidence = round(max(model.predict_proba(vector)[0]) * 100, 2)

        return jsonify({
            "mood": prediction,
            "confidence": confidence
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)