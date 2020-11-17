//funcao que irá resgatar todos pokemons da api
const buscarPokemon = () => {

    const promises = []

    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        promises.push(fetch(url).then((res) => res.json()))
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            nome: result.name,
            imagem: result.sprites['front_default']
        }))
        mostrarPokemon(pokemon);
    });

}

buscarPokemon()

const mostrarPokemon = (pokemon) => {
    //console.log(pokemon);
    const html = pokemon
        .map(
            (cadaPokemon) => `
        <li class = "cartao">
            <h2>${cadaPokemon.nome}</h2>
            <img src = "${cadaPokemon.imagem}"/>
        </li>
        `).join(''); //convert para String
    pokedex.innerHTML = html;
};



const pokedex = document.getElementById('pokedex');

