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
    all_users = User.query.all() # Returns a list of all users in the database [User1, User2, User3, ...]
    # first_user = User.query.first() # Returns the first user in the database
    # user = User.query.get(1) # Returns the user with the id of 1
    return render_template("index.html", all_users = all_users)

@app.route('/adduser', methods=['POST', 'GET'])
def adduser():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        new_user = User(email = email, password = password)

        db.session.add(new_user)

        db.session.commit()
        
    return redirect('/')

@app.route('/update/<user_id>')
def update(user_id):
    user = User.query.get(user_id)

    user.email = "update@update.com"
    user.password = "4321"

    db.session.commit()

    return redirect('/')

@app.route('/delete/<user_id>')
def delete(user_id):
    user = User.query.get(user_id)

    db.session.delete(user)

    db.session.commit()

    return redirect('/')

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        app.run(debug = True, port = 5000)