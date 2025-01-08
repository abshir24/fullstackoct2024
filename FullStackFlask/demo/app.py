from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///demo.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  #Every user should have a user Id. The primary_key parameter indicates that this id is specific to this record only

    email = db.Column(db.String(200), nullable=False)

    password = db.Column(db.String(200), nullable=False) 

@app.route('/')

def index():
    return render_template("index.html")

@app.route('/adduser', methods=['POST', 'GET'])
def adduser():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        new_user = User(email = email, password = password)

        db.session.add(new_user)

        db.session.commit()
        
    return redirect('/')

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        app.run(debug = True, port = 5000)