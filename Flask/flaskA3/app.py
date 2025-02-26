from flask import Flask, render_template


app = Flask(__name__)

# "localhost:5000/ or http://127.0.0.1:5000/home/"
@app.route('/') 
def index():
    return render_template("loop.html")
    # return render_template("index.html", name="Abshir", food="Indian Food", vacation="Tulum")



if __name__ == "__main__":
    app.run()