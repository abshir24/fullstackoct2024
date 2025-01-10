from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fsa3.db'

db = SQLAlchemy(app)

class Course(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    description = db.Column(db.String(500), nullable = False)
    date_created = db.Column(db.DateTime, server_default = db.func.now()) 


@app.route('/')
def index():
    all_courses = Course.query.all()

    return render_template("index.html", courses = all_courses)

@app.route('/addcourse', methods = ['GET','POST'])
def addcourse():
    if request.method == 'POST':
        name = request.form['name']
        description = request.form['description']

        course = Course(name = name, description = description)

        db.session.add(course)

        try:
            db.session.commit()
        except Exception as e:
            print("Error:", e)
            db.session.rollback()

           
    return redirect('/')

@app.route('/deletecourse/<int:id>')

def deletecourse(id):
    course = Course.query.get(id)
    
    return render_template("deletecourse.html", course = course)

@app.route('/delete/<int:id>')
def delete(id):
    course = Course.query.get(id)

    db.session.delete(course)

    try:
        db.session.commit()
    except Exception as e:
        print("Error:", e)
        db.session.rollback()
    return redirect('/')

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        app.run(debug = True, port = 5000)