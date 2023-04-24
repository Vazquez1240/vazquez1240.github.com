function copiarTexto() {
    // Obtener el elemento que contiene el texto a copiar
    var textoACopiar = document.getElementById("texto-a-copiar");
  
    // Crear un elemento de texto temporal para copiar el texto
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textoACopiar.textContent;
  
    // Agregar el elemento temporal al documento
    document.body.appendChild(elementoTemporal);
  
    // Seleccionar el texto del elemento temporal
    elementoTemporal.select();
  
  
    // Remover el elemento temporal del documento
    document.body.removeChild(elementoTemporal);

    alert("Correo Copiado");
  }

function cambiarFondo(color,colorP){
  var div = document.getElementById("imagen");
  var elementosP = div.getElementsByTagName('p');
  div.style.backgroundColor = color;
  for(var i = 0; i < elementosP.length; i++) {
    elementosP[i].style.color = colorP;
  }
}