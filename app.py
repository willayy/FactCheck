from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def render_input_page():
    return render_template('inputPage.html') 

if __name__ == '__main__':
    app.run()