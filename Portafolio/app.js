
const direccionar = (id) =>{
    switch (id){
        case 'barberia':
            var url = 'https://vazquez1240.github.io/Barberia';
            window.location.href = url;
            break
        case 'encriptador':
            url = 'https://vazquez1240.github.io/encriptador';
            window.location.href = url;
            break

        case 'mini-alura':
            url = 'https://vazquez1240.github.io/Miini-Alura';
            window.location.href = url;
            break
        
        case 'pizzeria':
            url = 'https://vazquez1240.github.io/voletines';
            window.location.href = url;
            break

        case 'sin-demo':
            Swal.fire({
                title:'Lo sentimos',
                text: 'Este repositorio no tiene demo',
                icon : 'error'
            })
            break

        default:
            alert('Este demo ya no esta en linea');
            break
    }
}


const repository = (id) => {
    switch(id){
        case 'barberia':
            let url = 'https://github.com/Vazquez1240/vazquez1240.github.com/tree/main/Barberia';
            window.location.href = url;
            break
        
        case 'encriptador':
            url = 'https://github.com/Vazquez1240/vazquez1240.github.com/tree/main/encriptador';
            window.location.href = url;
            break

        case 'mini-alura':
            url = 'https://github.com/Vazquez1240/vazquez1240.github.com/tree/main/Miini-Alura';
            window.location.href = url;
            break
        
        case 'pizzeria':
            url = 'https://github.com/Vazquez1240/vazquez1240.github.com/tree/main/voletines';
            window.location.href = url;
            break
        
        case 'tienda-virtual':
            url = 'https://github.com/Vazquez1240/TiendaVirtual';
            window.location.href = url;
            break

        default:
            alert('Este repositorio ya no existe!')
            break
    }
}

const btn_correo = document.querySelector('.contacto');

btn_correo.addEventListener('click',copiarTexto)


function copiarTexto() {
    // Texto que deseas copiar
    var texto = "vazquezmartin1240@gmail.com";

    // Crear un elemento de textarea temporal
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = texto;

    // Agregar el elemento de textarea al documento
    document.body.appendChild(tempTextArea);

    // Seleccionar el texto dentro del elemento de textarea
    tempTextArea.select();

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento de textarea temporal
    document.body.removeChild(tempTextArea);

    // Mostrar un mensaje de éxitoç
    
    Swal.fire({
        title: "Exito",
        text: "Correo copiado correctamente en el portapapeles",
        icon: "success"
    })
}


