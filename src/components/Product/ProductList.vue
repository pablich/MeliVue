<template lang="pug">
  div
   nav.breadcrumb.has-succeeds-separator(aria-label="breadcrumbs")
       ul
        li(v-for="breadcrumb in breadcrumbs")
          a(@click="goToCategory(breadcrumb.id)") {{breadcrumb.name}}
   .container
      .columns.is-multiline
          template(v-for="product in products")
            div.column.is-8
              .card(@click="goToProduct(product.id)")
                .card-content
                    .media
                        .media-left
                            figure.image.is-128x128
                                img(:src="product.thumbnail")
                        .media-content
                            p.title.is-6 {{product.title}}
                            p.subtitle.is-6 $ {{product.price}}
                            p.subtitle.is-6(v-if="product.shipping.free_shipping") Envío gratis a todo el país
                            p.subtitle.is-6(v-else) Envío a todo el país
                            p.subtitle.is-6 {{product.sold_quantity}} Vendidos | {{product.address.state_name}} - {{product.address.city_name}}
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
    };
  },
  computed: {
    breadcrumbs() {
      const category = this.$store.getters.categoryById(this.$route.params.id);
      return category.path_from_root;
    },
  },
  created() {
    const categoryId = this.$route.params.id;
    if (!this.breadcrumbs) {
      axios.get(`https://api.mercadolibre.com/categories/${categoryId}`).then((response) => {
        this.$store.commit('setCategory', response.data);
      });
    }
    if (this.$route.name === 'productList') {
      axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`).then((response) => {
        this.products = response.data.results;
      });
    } else {
      axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryId}`).then((response) => {
        this.products = response.data.results;
      });
    }
  },
  methods: {
    goToProduct(id) {
      this.$router.push({ name: 'product', params: { id } });
    },
    goToCategory(id) {
      axios.get(`https://api.mercadolibre.com/categories/${id}`).then((response) => {
        this.$router.push({ name: 'productList', params: { id } });
        this.$store.commit('setCategory', response.data);
      });
    },
  },
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