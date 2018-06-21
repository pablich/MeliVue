<template lang="pug">
div
  nav.breadcrumb.has-succeeds-separator(aria-label="breadcrumbs")
      ul
        li(v-for="breadcrumb in breadcrumbs")
          a(@click="goToCategory(breadcrumb.id)") {{breadcrumb.name}}
  .container.has-text-centered
    h3(v-if="!this.$route.params.id") Navegar por las categorias
    .columns.is-multiline
        template(v-for="category in categories")
          div.column.is-one-third
            mv-category(:categoryId="category.id")
</template>
<script>
import MvCategory from './Category.vue';

export default {
  name: 'CategoryList',
  components: { MvCategory },
  created() {
    if (this.$route.params.id) {
      this.$store.dispatch('GET_SUBCATEGORIES', this.$route.params.id);
    } else {
      this.$store.dispatch('GET_CATEGORIES');
    }
  },
  computed: {
    categories() {
      if (this.$route.params.id) {
        return this.$store.state.products.subcategories;
      }
      return this.$store.state.products.categories;
    },
    breadcrumbs() {
      return this.$store.state.products.breadcrumbs;
    },
  },
  methods: {
    goToCategory(id) {
      this.$router.push({ name: 'CategoryList', params: { id } });
    },
  },
};
</script>
<style scoped>
h3 {
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem 0;
}
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
