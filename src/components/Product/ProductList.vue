<template lang="pug">
  div
   nav.breadcrumb.has-succeeds-separator(aria-label="breadcrumbs")
       ul
        li(v-for="breadcrumb in breadcrumbs")
          a(@click="goToCategory(breadcrumb.id)") {{breadcrumb.name}}
   .container
      .columns.is-multiline
            .column.is-4
              .card
                .card-content
                  h2 Filtros
                  hr
                  .columns(v-for='filter in filters')
                    .column
                      label.bold {{ filter.name }}
                      ul
                        li(v-for='value in filter.values')
                          a {{ value.name}}
            .column.is-8
              .columns(v-for="product in products")
                .column
                  .card
                    .card-content
                        .media
                            .media-left
                                figure.image.is-128x128
                                    img(:src="product.thumbnail")
                            .media-content
                                p.title.is-6(@click="goToProduct(product.id)") {{product.title}}
                                p.subtitle.is-6 $ {{product.price}}
                                p.subtitle.is-6(v-if="product.shipping.free_shipping") Envío gratis a todo el país
                                p.subtitle.is-6(v-else) Envío a todo el país
                                p.subtitle.is-6 {{product.sold_quantity}} Vendidos | {{product.address.state_name}} - {{product.address.city_name}}
                                button.button.is-primary(v-if="!checkExist(product.id)", @click="addToCart(product)") Añadir al carro
                                button.button.is-danger(v-if="checkExist(product.id)", @click="removeFromCart(product.id)") Eliminar del carro
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductList',
  computed: mapState({
    breadcrumbs: state => state.products.breadcrumbs,
    products: state => state.products.products,
    filters: state => state.products.filters,
  }),
  created() {
    if (this.$route.name === 'productList') {
      this.$store.dispatch('GET_PRODUCTS', this.$route.params.id);
      this.$store.dispatch('GET_SUBCATEGORIES', this.$route.params.id);
    } else {
      this.$store.dispatch('SEARCH_PRODUCTS', this.$route.params.id);
    }
  },
  methods: {
    checkExist(product) {
      return this.$store.getters.checkExist(product);
    },
    addToCart(product) {
      this.$store.dispatch('ADD_PRODUCT', product);
    },
    removeFromCart(product) {
      this.$store.dispatch('REMOVE_PRODUCT', product);
    },
    goToProduct(id) {
      this.$router.push({ name: 'product', params: { id } });
    },
    goToCategory(id) {
      this.$store.dispatch('GET_CATEGORY', id).then(() => {
        this.$router.push({ name: 'productList', params: { id } });
      });
    },
  },
};
</script>
<style scoped>
.column.is-9 .card:hover {
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
label.bold {
    font-size: 1rem;
    margin: 0;
}
.column ul li {
    font-size: 0.8rem;
    font-weight: 300;
}
</style>