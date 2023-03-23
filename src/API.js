class API {
    constructor() {
        this.pokemon = [];
    }

    //fetch pokemon from api
    async getPokemons() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        this.pokemon = data.results.map((pokemon, index) => ({
            ...pokemon,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));

        return this.pokemon;
    }

    async getPokemon(name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let data = await response.json();
        data = {
            ...data,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
        }

        return data;
    }
}

export default API;