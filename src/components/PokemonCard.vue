<template>
    <a v-bind:href="'/'+pokemon.name"
       class=" hover:scale-110 transition duration-300 ease-in-out cursor-pointer border border-slate-600 rounded-lg shadow-lg p-5 flex flex-col items-center justify-around"
       ref="card"
       v-bind:style="{ backgroundColor: backgroundColor }">

      <h2 class="text-2xl font-bold text-white/90">{{ pokemon.name }}</h2>
      <img :src="pokemon.image" alt="pokemon" class="w-1/2 ">
    </a>
</template>

<script>
import ColorThief from 'colorthief';

export default {
  name: "PokemonCard",
  props: ['pokemon'],
  //computed because are using prop based data
  computed: {
    backgroundColor() {
      const colorThief = new ColorThief();
      const img = new Image();
      img.src = this.pokemon.image;
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        console.log('loaded iamge')
        const color = colorThief.getColor(img);
        const backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`;
        this.$refs.card.style.backgroundColor = backgroundColor;
      }
    }
  }

}
</script>

<style scoped>
/* Style for the hover effect */
.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>