from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=BASE_DIR)
CORS(app)

# Load model
MODEL_PATH = os.path.join(BASE_DIR, 'asd_model_new.pkl')
with open(MODEL_PATH, 'rb') as f:
    model_data = pickle.load(f)

pipeline = model_data['pipeline']
feature_names = model_data['feature_names']

print("[OK] Model loaded successfully!")
print(f"   Features: {feature_names}")
print(f"   Accuracy: {model_data.get('accuracy', 'N/A')}")


@app.route('/')
def index():
    return send_from_directory(BASE_DIR, 'index.html')


@app.route('/style.css')
def serve_css():
    return send_from_directory(BASE_DIR, 'style.css')


@app.route('/script.js')
def serve_js():
    return send_from_directory(BASE_DIR, 'script.js')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Extract and validate features in correct order
        features = {
            'A1':  int(data.get('A1', 0)),
            'A2':  int(data.get('A2', 0)),
            'A3':  int(data.get('A3', 0)),
            'A4':  int(data.get('A4', 0)),
            'A5':  int(data.get('A5', 0)),
            'A6':  int(data.get('A6', 0)),
            'A7':  int(data.get('A7', 0)),
            'A8':  int(data.get('A8', 0)),
            'A9':  int(data.get('A9', 0)),
            'A10': int(data.get('A10', 0)),
            'Age': int(data.get('Age', 10)),
            'Group': int(data.get('Group', 1)),
            'Sex': int(data.get('Sex', 1)),
            'Jaundice': int(data.get('Jaundice', 0)),
            'Family_ASD': int(data.get('Family_ASD', 0)),
        }

        input_df = pd.DataFrame([features], columns=feature_names)

        prediction = pipeline.predict(input_df)[0]
        probabilities = pipeline.predict_proba(input_df)[0]
        prob_asd = float(probabilities[1])
        prob_no_asd = float(probabilities[0])

        return jsonify({
            'success': True,
            'prediction': int(prediction),
            'probability_asd': round(prob_asd * 100, 1),
            'probability_no_asd': round(prob_no_asd * 100, 1),
            'label': 'ASD সম্ভাবনা আছে' if prediction == 1 else 'ASD সম্ভাবনা কম',
        })

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({'success': False, 'error': str(e)}), 400


@app.route('/health')
def health():
    return jsonify({
        'status': 'ok',
        'model': 'Ensemble (RF+DT+GB)',
        'accuracy': f"{model_data.get('accuracy', 0)*100:.2f}%"
    })


if __name__ == '__main__':
    print("\n" + "="*50)
    print("ASD Detection Server Starting...")
    print("="*50)
    print(f"   URL: http://localhost:5000")
    print(f"   Model: Ensemble (RF + DT + GB)")
    print(f"   Accuracy: {model_data.get('accuracy', 0)*100:.2f}%")
    print("="*50 + "\n")
    app.run(debug=False, port=5000, host='0.0.0.0')
