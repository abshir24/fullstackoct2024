from flask import Flask, render_template, request


app = Flask(__name__)

# "localhost:5000/ or http://127.0.0.1:5000/home/"
@app.route('/') 
def hello():
    return render_template("home.html")

@app.route('/formdata', methods = ['GET','POST']) 
def formdata():
    email = request.form['email']
    password = request.form['password']

    return render_template("formdata.html", email = email, password = password)

if __name__ == "__main__":
    app.run()