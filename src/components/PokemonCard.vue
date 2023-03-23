<template>
    <a v-bind:href="'/'+pokemon.name" class="bg-slate-900 hover:bg-slate-800 cursor-pointer border border-slate-600 rounded-lg shadow-lg p-5 flex flex-col items-center justify-center">
      <h2 class="text-2xl font-bold">{{ pokemon.name }}</h2>
      <img :src="pokemon.image" alt="pokemon" class="w-1/2">
    </a>
</template>

<script>
export default {
  name: "PokemonCard",
  props: ['pokemon'],
}
</script>