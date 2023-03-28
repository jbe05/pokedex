class API {
    offset = 0;
    constructor() {
        this.pokemon = [];
    }

    /**
     * Get all pokemons
     * @returns {Promise<[]>}
     */
    async getPokemons(pokemonAmount = 20, offset = 0) {
        const response = await fetch( `https://pokeapi.co/api/v2/pokemon?limit=${pokemonAmount}&offset=${offset}`);
        const data = await response.json();
        console.log(this.offset)
        this.pokemon = data.results.map((pokemon, index) => ({
            ...pokemon,
            id: offset + index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${offset + index + 1}.png`
        }));

        return this.pokemon;
    }

    /**
     * Get pokemon by name
     * @param name
     * @returns {Promise<*>}
     */
    async getPokemon(name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let data = await response.json();
        data = {
            ...data,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
        }

        return data;
    }
}

export default API;