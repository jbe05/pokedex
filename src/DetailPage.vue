<template>
  <div class="flex justify-center">
    <div id="contain" class="w-4/5 flex items-center flex-col h-auto px-8 pb-12 pt-6 shadow-lg rounded-lg bg-opacity-[0.7]" >
      <div class="flex justify-between items-center w-full mb-6">
        <!-- svg arrows for navigation by pokemon iD bold arrows -->
        <div class="flex items-center gap-6">
          <svg @click="previousPokemon()" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <div class="flex flex-col w-full">
            <h1 class="font-bold text-2xl font-mono text-white">#{{ pokemon.id }}</h1>
            <h1 class="font-bold text-2xl font-mono text-white">{{ pokemon.name }}</h1>
          </div>

        </div>

        <svg @click="nextPokemon()" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div class="flex justify-between w-full">
        <img :src="pokemon.image" alt="pokemon" class="w-2/5 aspect-square">
        <div class="flex flex-col w-2/5">
          <h1 class="font-bold text-2xl w-1/2 font-mono text-white">Pokemon types</h1>
          <hr class="w-1/2 my-2">
          <div class="grid grid-cols-2 w-1/2 gap-4">
              <typeBubble v-for="type in pokemon.types" :key="type.type.name" :type="type.type.name" />
          </div>
          <div class="flex">
            <div class="w-2/3">
              <h1 class="mt-16 font-bold text-xl font-mono text-white">Abilities</h1>
              <hr class="w-1/2 my-2">
              <div class="grid grid-cols-2 w-full gap-4">
                <div v-for="ability in pokemon.abilities" :key="ability.ability.name" class="bg-black/60 rounded-md flex flex-col items-center justify-center">
                  <h1 class="font-bold text-xl font-mono text-white">{{ ability.ability.name }}</h1>
                  <h1 class="font-bold text-xl font-mono text-white">{{ ability.slot }}</h1>
                </div>
              </div>
            </div>
            <div class="w-1/3">
              <div class="flex justify-between">
                <h1 class="font-bold text-xl font-mono text-white">Height: </h1>
                <h1 class="font-bold text-xl font-mono text-white">{{ pokemon.height }}</h1>
              </div>
              <div class="flex justify-between">
                <h1 class="mt-6 font-bold text-xl font-mono text-white">Weight: </h1>
                <h1 class="mt-6 font-bold text-xl font-mono text-white">{{ pokemon.weight }}</h1>
              </div>
            </div>
          </div>

          <!-- table with all pokemon stats -->
          <h1 class="mt-16 font-bold text-xl font-mono text-white">Stats</h1>
          <!-- loop through all stats -->
          <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="flex justify-between">
            <h1 class="font-bold text-xl font-mono text-white">{{ stat.stat.name }}: </h1>
            <h1 class="font-bold text-xl font-mono text-white">{{ stat.base_stat }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "./API";
import typeBubble from "./components/typeBubble.vue";

export default {
  name: "DetailPage",
  components: {
    typeBubble
  },
  data() {
    return {
      pokemonName: this.$route.params.pokemon,
      api: new Api(),
      pokemon: []
    }
  },
  methods: {
    nextPokemon() {
      let nextPokemon = parseInt(this.pokemon.id) + 1;
      window.location.href = "/" + nextPokemon;
    },
    previousPokemon() {
      //make new id variable that parses this.pokemon.id to an integer
      let previousPokemon = parseInt(this.pokemon.id) - 1;
      if (this.pokemon.id > 1) {
        window.location.href = "/" + previousPokemon;
      }
    }
  },
  async created() {
    await this.api.getPokemon(this.pokemonName).then((response) => {
      this.pokemon = response;
      console.log(this.pokemon)
    })
    //add pokemon type name to pkContainer div
    document.getElementById("contain").classList.add("bg-" + this.pokemon.types[0].type.name);
  },
}
</script>