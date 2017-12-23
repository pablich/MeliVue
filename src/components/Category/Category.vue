<template lang="pug">
    .card(@click="goToSubCategory(Category.id)",v-if="Category.total_items_in_this_category")
      .card-content
        .media
          .media-left
            figure.image.is-48x48
              img(:src="Category.picture")
          .media-content
            p.title.is-6 {{Category.name}}
            p.subtitle.is-6 Total de Articulos: {{Category.total_items_in_this_category}}

</template>

<script>
import axios from 'axios';

export default {
  name: 'Category',
  props: ['categoryId'],
  data() {
    return {
      Category: {},
    };
  },
  created() {
    const a = this.categoryId;
    axios.get(`https://api.mercadolibre.com/categories/${a}`).then((response) => {
      this.Category = response.data;
    });
  },
  methods: {
    goToSubCategory(id) {
      if (this.Category.children_categories.length === 0) {
        this.$router.push({ name: 'productList', params: { id } });
        this.$store.commit('setCategory', this.Category);
      } else {
        this.$router.push({ name: 'subCategoryList', params: { id } });
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