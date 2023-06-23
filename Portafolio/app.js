


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

        default:
            alert('Este repositorio ya no existe!')
            break
    }
}
