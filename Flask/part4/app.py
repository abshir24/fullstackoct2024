from flask import Flask, render_template,session,request,redirect

app = Flask(__name__)

app.secret_key = 'secret_key'

@app.route('/login', methods = ['GET','POST']) 
def index():
    if request.method == 'POST':
        session['logged_in'] = True
        
        return redirect('/admin')

    return render_template("index.html")

@app.route('/admin') 
def admin():
    return render_template("admin.html")


if __name__ == "__main__":
    app.run()