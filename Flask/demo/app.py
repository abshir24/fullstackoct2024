from flask import Flask, render_template


app = Flask(__name__)

# "localhost:5000/ or http://127.0.0.1:5000/home/"
@app.route('/') 
def hello():
    dictionary = {"Betty": "Amsterdam"}
    return render_template("home.html", dictionary = dictionary)


if __name__ == "__main__":
    app.run()