//este archivo contiene todos los elementos de la interfaz.
class Interfaz {
  //aqui creo un constructor, para que la lista de las criptomonedas, sea cargada enseguida.
  constructor() {
    this.init();
  }

  //aqui dentro de este init es donde va todo lo que quiero que inicie al principio.
  init() {
    this.construirSelect();
  }
  //construir select de las criptomonedas:
  construirSelect() {
    //esto es un promise:
    api.obtenerMonedasApi().then((monedas) => {
      //aqui el resultado no es un arreglo, si no un objeto de contiene objetos, por lo tanto no puedo recorrerlo con un forEach, si no que tengo que utilizar es Object.entries(), el cual si me permite recorrer objetos.
      //   console.log(Object.entries(monedas.monedas.Data));
      //el object entries, por si solo, solamente me convierte el objeto en un arreglo, pero no lo recorre, para recorrer el objeto y hay imprimir sus valores, hago:

      const listaDesplegable = document.getElementById("criptomoneda");
      for (const [key, value] of Object.entries(monedas.monedas.Data)) {
        //entonces aqui añadire el symbol y el name, de los elementos del objeto, como opciones en la lista desplegable:
        const opcion = document.createElement("option");
        opcion.value = `${value.Symbol}`;
        opcion.appendChild(document.createTextNode(`${value.CoinName}`));
        listaDesplegable.appendChild(opcion);
      }
    });
  }

  //creo un metodo para mostrar alertas:
  mostrarMensaje(mensaje, clase) {
    //creo un div para mostrar el mensaje:
    const div = document.createElement("div");
    //le coloco una clase:
    div.className = clase;
    //le inserto el texto del mensaje al div:
    div.innerHTML = mensaje;
    /*tambien lo puedo hacer asi:
    div.appendChild(document.createTextNode(mensaje));
    */

    //luego lo agrego al html:
    document.querySelector(".mensajes").appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 3500);
  }

  //seccion para imprimir el resultado de la cotizacion de la criptomoneda:

  mostrarResultado(resultado, moneda, criptoMoneda) {
    // console.log(resultado);
    //entonces como aqui tengo un objeto dentro de otro, es decir tengo el valor de la moneda dentro del objeto llamado como el value del cripto hago:
    // console.log(resultado[criptoMoneda]);
    //tego otro nivel del objeto por lo tanto:
    // console.log(resultado[criptoMoneda][moneda]);
    //entonces para acceder a un solo valor hago:
    const datosMoneda = resultado[criptoMoneda][moneda];
    //esto lo hago para filtrar mejor el resultado.

    //recortar decimales en las respuestas de los valores, asi:
    //utilizo el metodo de los numeros (tofixed):
    let precios = datosMoneda.PRICE.toFixed(2);

    //para colocar la ultima fecha de actualizacion, la api me devuelve un time slip de unix, entonces lo voy a convertir a una fecha legible asi:
    let fecha = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString(
      "es-CO"
    );
    //siempre se multiplica por mil, para poder mostrar la fecha en una formato legible

    //construir el template:
    let templatHtml = `
        <div class="card bg-warning">
            <div class="card-body text-light">
                <h2 class="card-title">Resultado:</h2>
                <p>El precio De: ${datosMoneda.FROMSYMBOL} a la moneda: ${datosMoneda.TOSYMBOL} es de: ${precios}</p>
                <p>La variación del último día: % ${datosMoneda.CHANGEPCTDAY}</p>
                <p>Ultima Actualizacion: ${fecha}</p>
                
            </div>
        </div>
    `;

    //llamo el metodo para mostrar el spinner:
    this.mostrarSpinner();

    setTimeout(() => {
      document.querySelector(".contenido-spinner").style.display = "none";
      //inserto el template del resultado en el apartado de la interfaz, asi:
      document.getElementById("resultado").innerHTML = templatHtml;
      setTimeout(() => {
        document.getElementById("resultado").style.display = "none";
      }, 7000);
    }, 4000);
  }

  //metodo para mostrar el spinner:
  mostrarSpinner() {
    const spinner = document.querySelector(".contenido-spinner");
    spinner.style.display = "block";
  }
}
