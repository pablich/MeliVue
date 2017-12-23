<template lang="pug">
div
  nav.breadcrumb.has-succeeds-separator(aria-label="breadcrumbs")
      ul
        li(v-for="breadcrumb in breadcrumbs")
          a(@click="goToCategory(breadcrumb.id)") {{breadcrumb.name}}
  .container
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
      breadcrumbs: [],
    };
  },
  methods: {
    goToCategory(id) {
      this.$router.push({ name: 'subCategoryList', params: { id } });
    },
  },
  created() {
    const categoryId = this.$route.params.id;
    axios.get(`https://api.mercadolibre.com/categories/${categoryId}`).then((response) => {
      this.categories = response.data.children_categories;
      this.breadcrumbs = response.data.path_from_root;
    });
  },
  components: { MvCategory },
};
</script>
<style>
.card:hover {
    background-color: #f5f2e2;
    cursor: pointer
}
.breadcrumb {
  background-color: #35495c;
  padding-left: 20px;
}
.breadcrumb li + li::before {
    color: #4d9a78;
}
.breadcrumb a {
    color: #fff;
}
</style>