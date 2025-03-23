from flask import Flask
from routes import api

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to the Flask Backend!"

app.register_blueprint(api)
if __name__ == '__main__':

    app.run(debug=True)
