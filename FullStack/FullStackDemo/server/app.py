from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Allow all origins on all routes
CORS(app)

@app.route('/test')
def test():
    return jsonify({'message': 'This is working. Successfully connected to the flask server.'})

if __name__ == '__main__':
    app.run(debug=True, port =5001)
