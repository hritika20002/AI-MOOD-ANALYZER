import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import pickle

data = {
    "text": [
        "I am happy",
        "I feel amazing",
        "I am sad",
        "I feel depressed",
        "I am angry",
        "This is frustrating",
        "I feel okay",
        "Just normal day"
    ],
    "mood": [
        "happy","happy",
        "sad","sad",
        "angry","angry",
        "neutral","neutral"
    ]
}

df = pd.DataFrame(data)

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df["text"])

model = LogisticRegression()
model.fit(X, df["mood"])

pickle.dump(model, open("model/model.pkl", "wb"))
pickle.dump(vectorizer, open("model/vectorizer.pkl", "wb"))

print("Model trained!")