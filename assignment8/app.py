from flask import Flask, redirect, url_for,  render_template

app = Flask(__name__)


@app.route('/')
@app.route('/index.html')
def index_func():
    return render_template('index.html')

@app.route('/form.html')
def contact_me():
    return render_template('form.html')

@app.route('/users.html')
def users_list():
    return render_template('users.html')

@app.route('/assignment8.html')
def assignment8():
    return render_template('assignment8.html', first_name='Hadar' , last_name='Greener', hobbies_pref=['movies','dancing','paint'])

@app.route('/extendassignment8.html')
def extendassignment8():
    return render_template('extendassignment8.html')

if __name__ == '__main__':
    app.run(debug=True)
