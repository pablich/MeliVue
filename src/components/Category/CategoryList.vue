<template lang="pug">
    .container.has-text-centered
      h3 Navegar por las categorias
      .columns.is-multiline
          template(v-for="category in categories")
            div.column.is-one-third
              mv-category(:categoryId="category.id")
</template>

<script>
import axios from 'axios';
import MvCategory from './Category.vue';

export default {
  name: 'CategoryList',
  data() {
    return {
      categories: [],
    };
  },
  created() {
    axios.get('https://api.mercadolibre.com/sites/MLA/categories').then((response) => {
      this.categories = response.data;
    });
  },
  components: { MvCategory },
};
</script>
<style scoped>
h3 {
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem 0;
}
</style>
