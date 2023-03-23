/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.vue",
  ],
  safelist: [
    "bg-grass",
    "bg-fire",
    "bg-water",
    "bg-bug",
    "bg-normal",
    "bg-poison",
    "bg-electric",
    "bg-ground",
    "bg-fairy",
    "bg-fighting",
    "bg-psychic",
    "bg-flying",
    "bg-ice",
    "bg-dragon",
    "bg-dark",
    "bg-steel",
    "bg-ghost",
    "bg-shadow",
    "bg-rock",
    "text-grass",
    "text-fire",
    "text-water",
    "text-bug",
    "text-normal",
    "text-poison",
    "text-electric",
    "text-ground",
    "text-fairy",
    "text-fighting",
    "text-psychic",
    "text-flying",
    "text-ice",
    "text-dragon",
    "text-dark",
    "text-steel",
    "text-ghost",
    "text-shadow",
    "text-rock",

  ],
  theme: {
    extend: {
        colors: {
          'grass': '#78C850',
          'fire': '#F08030',
          'water': '#6890F0',
          'bug': '#A8B820',
          'normal': '#A8A878',
          'poison': '#A040A0',
          'electric': '#F8D030',
          'ground': '#E0C068',
          'fairy': '#EE99AC',
          'fighting': '#C03028',
          'psychic': '#F85888',
          'flying': '#A890F0',
          'ice': '#98D8D8',
          'dragon': '#7038F8',
          'dark': '#705848',
          'ghost': '#705898',
          'steel': '#B8B8D0',
          'shadow': '#000000',
          'rock': '#B8A038',
        }
    },
  },
  plugins: [],
}