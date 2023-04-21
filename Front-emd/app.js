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
  
    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');
  
    // Remover el elemento temporal del documento
    document.body.removeChild(elementoTemporal);

    alert("Correo Copiado");
  }