from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/articles', methods=["GET"])
def list_articles():
    return jsonify([{"photo": "photo", "title": "title changed", "link": "link"}])
