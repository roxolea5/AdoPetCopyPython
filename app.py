from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/dogs')
def dogs():
    return render_template('dogs.html')




if __name__ == '__main__':
    app.run(debug=True)