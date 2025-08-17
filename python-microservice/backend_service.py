from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/final/<data>", methods=["GET"])
def final_process(data):
    result = data[::-1]  # simple logic: reverse string
    return jsonify({
        "from": "Python Service",
        "input": data,
        "output": result
    })

@app.route("/")
def home():
    return "Hello from Python Microservice 2!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
