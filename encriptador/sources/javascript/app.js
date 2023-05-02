function seguirTextArea(idTextArea) {
    var textarea = document.getElementById(idTextArea);
    if (window.matchMedia("(min-width:69px) and (max-width: 490px)").matches) {
        textarea.addEventListener('input', function() {
          if(textarea.value.length === 0){
            document.getElementById("imagen").style.display = "none",
            document.getElementById("encriptarTexto").style.display = "block",
            document.getElementById("msj-entrada").style.display = "block",
            document.getElementById("descripcion").style.display = "block",
            document.getElementById("areams").style.display = "none",
            document.getElementById("encriptadoTxt").value = "";
            console.log("Hola soy el 490px");
        }
      });
    }else if (window.matchMedia("(min-width: 1001px) and (max-width:1440px)").matches) {
        var textarea = document.getElementById('cifrarTexto');
        console.log(textarea);
        textarea.addEventListener('input', function() {
          if(textarea.value.length === 0){
              document.getElementById("imagen").style.display = "block",
              document.getElementById("encriptarTexto").style.display = "block",
              document.getElementById("msj-entrada").style.display = "block",
              document.getElementById("descripcion").style.display = "block",
              document.getElementById("areams").style.display = "none",
              document.getElementById("encriptadoTxt").value = "";
              console.log("Hola soy 1024px");
          }
        });
    }else if (window.matchMedia("(min-width:740px) and (max-width: 1000px)").matches){
      var textarea = document.getElementById(idTextArea);
      console.log(textarea);
      textarea.addEventListener('input',function(){
        if(textarea.value.length === 0){
            document.getElementById("imagen").style.display = "none",
            document.getElementById("encriptarTexto").style.display = "block",
            document.getElementById("msj-entrada").style.display = "block",
            document.getElementById("descripcion").style.display = "block",
            document.getElementById("areams").style.display = "none",
            document.getElementById("encriptadoTxt").value = "";
            console.log("Hola soy 980px");
        }
      })
    }else{
      var textarea = document.getElementById(idTextArea);
      console.log(textarea);
      textarea.addEventListener('input',function(){
        if(textarea.value.length === 0){
          document.getElementById("imagen").style.display = "block",
          document.getElementById("encriptarTexto").style.display = "block",
          document.getElementById("msj-entrada").style.display = "block",
          document.getElementById("descripcion").style.display = "block",
          document.getElementById("areams").style.display = "none",
          document.getElementById("encriptadoTxt").value = "";
          console.log("Hola soy 980px");
        }
      })
    }
}


// Función para encriptar el texto ingresado.
function encriptarTexto() {
    var texto = document.getElementById("cifrarTexto").value;
  
    var cifrarTexto = texto.replace(/e/gm, "enter");
    var cifrarTexto = cifrarTexto.replace(/o/gm, "ober");
    var cifrarTexto = cifrarTexto.replace(/i/gm, "imes");
    var cifrarTexto = cifrarTexto.replace(/a/gm, "ai");
    var cifrarTexto = cifrarTexto.replace(/u/gm, "ufat");
  
  //Mostrar notificación si no se ingreso texto.
    if (texto === "") {
      alert("Ups, Parece que no ha ingresado un texto");
      var textarea = document.getElementById('cifrarTexto');
      if (window.matchMedia("(min-width:69px) and (max-width: 490px)").matches) {
        textarea.addEventListener('input', function() {
          if(textarea.value.length === 0){
            return(
              document.getElementById("imagen").style.display = "none",
              document.getElementById("encriptarTexto").style.display = "block",
              document.getElementById("msj-entrada").style.display = "block",
              document.getElementById("descripcion").style.display = "block",
              document.getElementById("areams").style.display = "none",
              document.getElementById("encriptadoTxt").value = "",
              console.log("Hola soy telefono")
            )
        }
      });
    }else if (window.matchMedia("(min-width: 1001px) and (max-width:1440px)").matches) {
        var textarea = document.getElementById('cifrarTexto');
        console.log(textarea);
        textarea.addEventListener('input', function() {
          if(textarea.value.length === 0){
             return(
              document.getElementById("imagen").style.display = "block",
              document.getElementById("encriptarTexto").style.display = "block",
              document.getElementById("msj-entrada").style.display = "block",
              document.getElementById("descripcion").style.display = "block",
              document.getElementById("areams").style.display = "none",
              document.getElementById("encriptadoTxt").value = "",
              console.log("Hola soy 1024px")
             )
          }
        });
    }else if (window.matchMedia("(min-width:740px) and (max-width: 1000px)").matches){
      var textarea = document.getElementById("cifrarTexto");
      console.log("hola mundo");
      console.log("Entro al return"),
      document.getElementById("imagen").style.display = "block",
      document.getElementById("encriptarTexto").style.display = "block",
      document.getElementById("msj-entrada").style.display = "block",
      document.getElementById("descripcion").style.display = "block",
      document.getElementById("areams").style.display = "none",
      document.getElementById("encriptadoTxt").value = "",
      console.log("Hola soy laptop")
    }else{
      var textarea = document.getElementById("cifrarTexto");
      console.log("gola");
      console.log("laptop");
      textarea.addEventListener('input',function(){
        if(textarea.value.length === 0){
          return(
            document.getElementById("imagen").style.display = "block",
            document.getElementById("encriptarTexto").style.display = "block",
            document.getElementById("msj-entrada").style.display = "block",
            document.getElementById("descripcion").style.display = "block",
            document.getElementById("areams").style.display = "none",
            document.getElementById("encriptadoTxt").value = "",
            console.log("Hola soy laptop")
          )
        }
      })
    }
    }
  
    // Ocultar y mostrar algunos elementos del encriptador.
    document.getElementById("encriptarTexto").style.display = "none";
    document.getElementById("imagen").style.display = "none";

  
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
    document.getElementById("areams").style.display = "block";
  
    document.getElementById("encriptadoTxt").value = cifrarTexto;
  }
  
  // Función desencriptar texto ingresado.
  function desencriptarTexto() {
    var texto = document.getElementById("cifrarTexto").value.toLowerCase();
  
    var cifrarTexto = texto.replace(/enter/gim, "e");
    var cifrarTexto = cifrarTexto.replace(/ober/gim, "o");
    var cifrarTexto = cifrarTexto.replace(/imes/gim, "i");
    var cifrarTexto = cifrarTexto.replace(/ai/gim, "a");
    var cifrarTexto = cifrarTexto.replace(/ufat/gim, "u");
    if (texto === "") {
        alert("Ups, Parece que no ha ingresado un texto");
        if (window.matchMedia("(min-width:69px) and (max-width: 490px)").matches) {
          textarea.addEventListener('input', function() {
            if(textarea.value.length === 0){
              document.getElementById("imagen").style.display = "none",
              document.getElementById("encriptarTexto").style.display = "block",
              document.getElementById("msj-entrada").style.display = "block",
              document.getElementById("descripcion").style.display = "block",
              document.getElementById("areams").style.display = "none",
              document.getElementById("encriptadoTxt").value = "";
              console.log("Hola soy el 490px");
          }
        });
      }else if (window.matchMedia("(min-width: 1001px) and (max-width:1440px)").matches) {
          var textarea = document.getElementById('cifrarTexto');
          console.log(textarea);
          textarea.addEventListener('input', function() {
            if(textarea.value.length === 0){
                document.getElementById("imagen").style.display = "block",
                document.getElementById("encriptarTexto").style.display = "block",
                document.getElementById("msj-entrada").style.display = "block",
                document.getElementById("descripcion").style.display = "block",
                document.getElementById("areams").style.display = "none",
                document.getElementById("encriptadoTxt").value = "";
                console.log("Hola soy 1024px");
            }
          });
      }else if (window.matchMedia("(min-width:740px) and (max-width: 1000px)").matches){
        var textarea = document.getElementById("cifrarTexto");
        console.log(textarea);
        textarea.addEventListener('input',function(){
          if(textarea.value.length === 0){
              document.getElementById("imagen").style.display = "none",
              document.getElementById("encriptarTexto").style.display = "block",
              document.getElementById("msj-entrada").style.display = "block",
              document.getElementById("descripcion").style.display = "block",
              document.getElementById("areams").style.display = "none",
              document.getElementById("encriptadoTxt").value = "";
              console.log("Hola soy 980px");
          }
        })
      }else{
        var textarea = document.getElementById("cifrarTexto");
        console.log(textarea);
        textarea.addEventListener('input',function(){
          if(textarea.value.length === 0){
            document.getElementById("imagen").style.display = "block",
            document.getElementById("encriptarTexto").style.display = "block",
            document.getElementById("msj-entrada").style.display = "block",
            document.getElementById("descripcion").style.display = "block",
            document.getElementById("areams").style.display = "none",
            document.getElementById("encriptadoTxt").value = "";
            console.log("Hola soy 980px");
          }
        })
      }
      }

    document.getElementById("imagen").style.display = "none";
    document.getElementById("encriptarTexto").style.display = "none";
    document.getElementById("msj-entrada").style.display = "none";
    document.getElementById("descripcion").style.display = "none";
  
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
    document.getElementById("areams").style.display = "block";
  
  
    document.getElementById("encriptadoTxt").value = cifrarTexto;
  }
  
  function copiarTexto() {
    var contenidoTxt = encriptadoTxt.value;
    navigator.clipboard.writeText(contenidoTxt);
  
  // Alerta para saber que se copio el texto
    alert("Texto copiado correctamente")
  }

  function actualizarPantalla(){
    window.addEventListener('resize', function() {
      // actualizar el código cuando cambia el tamaño de la pantalla
      textarea.removeEventListener('input', null); // eliminar el evento anterior
      seguirTextArea('cifrarTexto'); // agregar el evento actualizado
    });
  }
  
  // Botones para  encriptar y desencriptar.
  
  var btn = document.querySelector("#btn-encriptar");
  btn.onclick = encriptarTexto;
  
  var btn2 = document.querySelector("#btn-desencriptar");
  btn2.onclick = desencriptarTexto;

  var btn3 = document.querySelector("#btn-copiar");
  btn3.onclick = copiarTexto;


//actualizarPantalla()
seguirTextArea('cifrarTexto');