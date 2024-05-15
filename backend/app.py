from flask import Flask
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Service is Healthy'

@app.route('/api/getQuote', methods=['GET'])
def send_request():
    joke = get_joke()
    return joke

def get_joke():
    response = requests.get("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    joke = response.json()
    return joke['joke']

if __name__ == '__main__':
    app.run(debug=True)