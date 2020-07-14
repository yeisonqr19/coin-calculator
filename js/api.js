//este archivo contiene todos los datos de la RestApi:
//contiene los datos de fetch Api:

//esta clase contendra la api:
class Api {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  //voy a utilizar async para obtener las monedas de la api:
  async obtenerMonedasApi() {
    //entonces sigo la guia que se encuentra en la documentacion de la api, y es que si mando la solicitud por url, le tengo que agregar la apiKey asi:
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;

    //fetch a la api:
    const urlObtenerMonedas = await fetch(url);

    //recibo la respuesta como json:
    const monedas = await urlObtenerMonedas.json();
    return {
      monedas,
    };
  }

  //metodo para consultar la api:
  async obtenerValores(moneda, criptoMoneda) {
    //aqui le envio el request a la api, siempre que vaya a interactuar con la api le tengo que colocar el apiKey
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;

    //consultar usando rest api, o con rest api:
    const urlConvertir = await fetch(url);
    const resultado = await urlConvertir.json();
    return {
      resultado,
    };
  }
}
