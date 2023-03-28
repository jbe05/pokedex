<template>
  <div>
    <div class="grid md:grid-cols-5  grid-cols-1 gap-5 px-5">
      <PokemonCard v-for="pokemon in pokemons" :pokemon="pokemon" />
    </div>
  </div>

  <!-- load more -->
  <div class="my-6 flex justify-center">
    <button @click="loadMore" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Load more
    </button>
  </div>
</template>

<script>
import PokemonCard from './components/PokemonCard.vue'
import Api from './API.js'

export default {
  name: "Homepage",
  components: {
    PokemonCard
  },
  data() {
    return {
      api: new Api(),
      pokemons: [],
    }
  },
  async created() {
    await this.api.getPokemons().then((response) => {
      this.pokemons = response;
    })
  },
  methods: {
    async loadMore() {
      await this.api.getPokemons(20, this.pokemons.length).then((response) => {
        // add new pokemons to pokemon array
        this.pokemons = this.pokemons.concat(response);
      })
    }
  }
}
</script>