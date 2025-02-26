from flask import Flask, request, render_template,session,redirect

app = Flask(__name__)

app.secret_key = 'secret_key'

@app.route('/')
def form():
    
    return render_template('index.html') 

@app.route('/submit', methods=['GET','POST'])
def submit():
    if request.method == 'POST':
        first_name = request.form['first-name']
        last_name = request.form['last-name']
        email = request.form['email']
        street_address = request.form['street-address']
        city = request.form['city']
        state = request.form['state']
        zip_code = request.form['zip-code']

        session['first_name'] = first_name
        session['last_name'] = last_name
        session['email'] = email
        session['street_address'] = street_address
        session['city'] = city
        session['state'] = state
        session['zip_code'] = zip_code
    

    return render_template('session.html')



if __name__ == '__main__':
    app.run(debug=True)
