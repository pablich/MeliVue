<template lang="pug">
   .container
      .columns
        .column
          .has-text-centered(v-if="products.length === 0")
              h3 Su carro se encuentra vacio. Agregue productos
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
                        button.button.is-danger(v-if="checkExist(product.id)", @click="removeFromCart(product.id)") Eliminar del carro
      button.button.is-success(v-if="products.length !== 0") Finalizar Compra
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductList',
  computed: mapState({
    products: state => state.cart.list,
  }),
  methods: {
    checkExist(product) {
      return this.$store.getters.checkExist(product);
    },
    removeFromCart(product) {
      this.$store.dispatch('REMOVE_PRODUCT', product);
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