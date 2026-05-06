🧠 AI Mood Analyzer

A simple full-stack machine learning project that predicts a user’s mood based on a single sentence.

It uses Natural Language Processing (NLP) to analyze text and classify emotions based on learned patterns.

The goal of this project was not to perfectly “understand” human emotions, but to explore how far simple models can go in interpreting natural language.

🌐 Live Demo

👉 https://ai-mood-analyzer.vercel.app

🚀 Features
Predicts mood from text input
Returns confidence score
Real-time API response
Simple and interactive UI
🧠 How It Works

The model does not truly understand emotions.

Instead, it:

Converts text into numerical features using TF-IDF
Applies a trained Logistic Regression model
Predicts the most likely mood category
🛠️ Tech Stack
Frontend: React ⚛️
Backend: Flask 🐍
ML: Scikit-learn (TF-IDF + Logistic Regression)
Deployment: Vercel + Render
🤔 Example

Input:

“I’m fine. Just tired.”

Output:

Mood: Neutral / Sad (depends on model)
Confidence: ~XX%

💡 What I Learned
Basics of NLP pipelines
How text classification works
Full-stack integration (React + Flask)
Deploying ML apps to production
📌 Note

This is a beginner-friendly ML project focused on learning, experimentation, and understanding how language models interpret human text.

⭐ Try It

👉 https://ai-mood-analyzer.vercel.app
