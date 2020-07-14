//instancia de los demas archivos, para poder usarlos en toda la aplicacion:
//instancio la api:
const api = new Api(
  "1010fd0f42f02ee30c384d575fda0098cb5e352c16b4e09a77cafac74c14b31e"
);
//instancia de la interfaz(ui):
const ui = new Interfaz();

//esta es como la conexion entre ambos archivos, es decir aqui es que invoco los dos archivos(api y ui).
//en este por ejemplo, es que leo el submit.

//Entonces primero voy a leer el formulario:
const form = document.getElementById("formulario");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //leer la moneda seleccionada:
  const monedaSelect = document.getElementById("moneda");
  const monedaSeleccionada =
    monedaSelect.options[monedaSelect.selectedIndex].value;

  //leo la criptomoneda:
  const criptoSelect = document.getElementById("criptomoneda");
  const criptoSeleccionada =
    criptoSelect.options[criptoSelect.selectedIndex].value;

  //comprobar que ambos campos del formulario no esten vacios:
  if (monedaSeleccionada === "" || criptoSeleccionada === "") {
    //envio una alerta de error:
    ui.mostrarMensaje(
      "Alerta, verifique si lleno todos los campos del formulario",
      "alert bg-danger text-center"
    );
  } else {
    //todo bien, consulto a la api:

    //entonces aqui. primero voy a crear un metodo en api.js, para consultar la api
    //ya tengo el metodo, entonces hago:
    api.obtenerValores(monedaSeleccionada, criptoSeleccionada).then((data) => {
      ui.mostrarResultado(
        data.resultado.RAW,
        monedaSeleccionada,
        criptoSeleccionada
      );
    });
  }
});
