from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

model = pickle.load(open("model/model.pkl", "rb"))
vectorizer = pickle.load(open("model/vectorizer.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    text = data.get("text")

    X = vectorizer.transform([text])
    prediction = model.predict(X)[0]
    confidence = model.predict_proba(X).max()

    return jsonify({
        "mood": prediction,
        "confidence": round(confidence * 100, 2)
    })

if __name__ == "__main__":
    app.run(debug=True)