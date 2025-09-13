from flask import Flask, jsonify
app = Flask(__name__)
dataAutos = [
    {
      "color":"Azul",
      "imagen":"https://www.automoli.com/common/vehicles/_assets/img/gallery/f68/honda-civic-type-r-fk8-facelift-2020.jpg",
      "marca":"Honda",
      "modelo":"Civic",
      "patente":"abcd12",
      "precio":1500
    },
    {
      "color":"azul",
      "imagen":"https://acnews.blob.core.windows.net/imgnews/extralarge/NAZ_5e24773059f24d70985cb547bc7a0cdf.jpg",
      "marca":"Nissan",
      "modelo":"V16",
      "patente":"qwer00",
      "precio":5000
    }
]
@app.route("/autos")
def obtenerAutos():
    return jsonify(dataAutos)    

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)