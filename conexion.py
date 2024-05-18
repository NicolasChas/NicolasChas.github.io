import mysql.connector
from flask import Flask,render_template, request


app = Flask(__name__)
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="gatobase"
)

@app.route('/')

def home():
  return render_template('catálogo.html')

@app.route('/submit', methods=['POST'])

def submit():
  mycursor = mydb.cursor()
  query=("select * from gatos_sin_adoptar")
  mycursor.execute(query)
  for x in mycursor:
    print(x)

  mycursor.close()

submit()

#mycursor = mydb.cursor()
#mycursor.execute("select * from gatos_sin_adoptar")
#data = mycursor.fetchall()
#for x in mycursor:
 # print(x)