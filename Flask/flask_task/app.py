from flask import Flask, render_template

app = Flask(__name__)

# "localhost:5000/ or http://127.0.0.1:5000/home"
@app.route('/home')
def home():
    return render_template("home.html")

@app.route('/about')
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.run()