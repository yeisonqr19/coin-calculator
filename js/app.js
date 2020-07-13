//instancia de los demas archivos, para poder usarlos en toda la aplicacion:
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
    ui.mostrarMensaje("Todo Correcto", "text-center alert bg-success");
  }
});
