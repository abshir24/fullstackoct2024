from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fsa1.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)  #Every user should have a user Id. The primary_key parameter indicates that this id is specific to this record only
    
    first_name = db.Column(db.String(200), nullable=False)

    last_name = db.Column(db.String(200), nullable=False)

    username = db.Column(db.String(200), nullable=False)

    email = db.Column(db.String(200), nullable=False)

    password = db.Column(db.String(200), nullable=False) 

@app.route('/')

def index():
    return render_template("index.html")

@app.route('/adduser', methods=['POST', 'GET'])
def adduser():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

        new_user = User(first_name=first_name, last_name=last_name, username=username, email = email, password = password)

        db.session.add(new_user)

        db.session.commit()
        
        return redirect('/allusers')
    return redirect('/')

@app.route('/allusers',)
def allusers():
    users = User.query.all() #This will return all the users in the database [<User>,<User>,<User>]

    return render_template('allusers.html', users = users)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        app.run(debug = True, port = 5000)