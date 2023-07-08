let url = 'https://pokeapi.co/api/v2/pokemon/';

btnHeaders = document.querySelectorAll('.btn-header');

let pokemonData = [];



for (let i = 1; i <= 151; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then( data => {
        pokemonData.push(data);

        if (pokemonData.length === 151) {

          pokemonData.sort((a, b) => a.id - b.id);
  
          pokemonData.forEach((pokemon) => mostrarData(pokemon));
        }
      }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un problema al obtener los datos de los Pokémon'
        })
      })
}


function mostrarData(data){
    pokemonData = [];
    const linea = document.createElement('div');
    linea.classList.add('card');

    let tipos = data.types.map((type) => 
        `<p class="${type.type.name} tipo-pokemon">${type.type.name}</p>`)
    tipos = tipos.join('');

    let pokeId = data.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    const contenido = `
    <div class="card-content">
        <img src=${data.sprites.other['official-artwork'].front_default} alt=${data.name}>
        <h2>${data.name}</h2>
        <p class="numero-pokemon">#${pokeId}</p>
        <div class='poke-tipos'>
            ${tipos}
        </div>
        <div class="poke-datos">
            <p>${data.height}m</p>
            <p>${data.weight}Kg</p>
        </div>
    </div>`
    linea.innerHTML = contenido;

    contenidos.append(linea)
}


btnHeaders.forEach( boton => boton.addEventListener('click', (event) =>{
    const botonId = event.currentTarget.id;
    contenidos.innerHTML = ''

    for (let i = 1; i <= 151; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then(data => {

            if(botonId === "ver-todos"){
                pokemonData.push(data);
                console.log("Aqui esta");
                if (pokemonData.length === 151) {
                    console.log('Entro ');
                    pokemonData.sort((a, b) => a.id - b.id);
                    pokemonData.forEach((pokemon) => mostrarData(pokemon));
                }

            }else{
                const tipos = data.types.map(type => type.type.name);
                if(tipos.some(tipo => tipo.includes(botonId))){
                    console.log(pokemonData.length);
                    pokemonData.push(data);
                    if (pokemonData.length === pokemonData.length) {
                        pokemonData.sort((a, b) => a.id - b.id);
                        pokemonData.forEach((pokemon) => mostrarData(pokemon));
                    }
                    
                }
            }
        })
    }
    
}))