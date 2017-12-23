<template lang="pug">
  #app
    mv-header
    <router-view :key="$route.path"></router-view>
</template>

<script>
import MvHeader from './components/Layout/Header.vue';

export default {
  name: 'app',
  components: {
    MvHeader,
  },
};
</script>
<style>
html, body {
  font-family: 'Roboto', sans-serif
}
</style>
