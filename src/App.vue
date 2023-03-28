<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      limit: 20,
    }
  },
}
</script>

<template>
  <Header />
  <router-view />
</template>