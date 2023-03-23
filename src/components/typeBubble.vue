<template>
  <div class="flex rounded-full justify-center shadow-lg bg-white">
    <h1 class="font-semibold text-xl px-6 py-2 font-mono" v-bind:class="'text-'+type">{{ type }}</h1>
  </div>
</template>

<script>
export default {
  name: "typeBubble",
  props: ['type'],
}
</script>