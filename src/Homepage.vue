<template>
  <div class="grid md:grid-cols-5  grid-cols-1 gap-5 px-5">
    <PokemonCard v-for="pokemon in pokemons" :pokemon="pokemon" />
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
}
</script>