//este archivo contiene todos los elementos de la interfaz.
class Interfaz {
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
}
