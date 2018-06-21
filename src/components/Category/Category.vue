<template lang="pug">
    .card(@click="goToSubCategory(category.id)",v-if="category")
      .card-content
        .media
          .media-left
            figure.image.is-48x48
              img(:src="category.picture")
          .media-content
            p.title.is-6 {{category.name}}
            p.subtitle.is-6 Total de Articulos: {{category.total_items_in_this_category}}
</template>
<script>
export default {
  name: 'Category',
  props: ['categoryId'],
  data() {
    return {
      category: null,
    };
  },
  created() {
    this.$store.dispatch('GET_CATEGORY', this.categoryId).then((response) => { this.category = response; });
  },
  methods: {
    goToSubCategory(id) {
      if (this.category.children_categories.length === 0) {
        this.$store.dispatch('SET_CATEGORY', this.category);
        this.$router.push({ name: 'productList', params: { id } });
      } else {
        this.$router.push({ name: 'CategoryList', params: { id } });
      }
    },
  },
};
</script>

<style scoped>
.card:hover {
    background-color: #f5f2e2;
    cursor: pointer
}
p.title, 
p.subtitle  {
  padding-top: 4px;
}
</style>