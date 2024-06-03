from flask import Flask, jsonify, request
from flask_cors import CORS
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Conv1D, Flatten, MaxPooling1D, Dropout
from joblib import load
import pandas as pd
import io


app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes


@app.route('/files', methods=['POST'])
def post_file():

    if 'file' not in request.files:
        return jsonify({"message": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400

    # Read the CSV file content in memory
    stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
    df = pd.read_csv(stream, delimiter=" ", header=None)
    print(df)

    # Load feature extractor model
    feature_extractor = keras.models.load_model("./models/feature_extractor.keras")
    
    extracted_data = feature_extractor.predict(df)

    # Load random forest model
    model = load("./models/decision_tree_model.joblib")

    # Make predictions
    pred = model.predict(extracted_data)

    return jsonify({
        "message": "File uploaded successfully",
        "filename": file.filename,
        "results": pred.tolist()
    }), 201