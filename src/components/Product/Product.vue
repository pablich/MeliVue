<template lang="pug">
    .card(@click="goToSubCategory(Category.id)")
      .card-content
        .media
          .media-left
            figure.image.is-128x128
              img(:src="product.thumbnail")
          .media-content
            p.title.is-6 {{product.title}}
            p.subtitle.is-6 $ {{product.price}}
</template>

<script>
import axios from 'axios';

export default {
  name: 'Product',
  data() {
    return {
      product: {},
    };
  },
  created() {
    const a = this.$route.params.id;
    axios.get(`https://api.mercadolibre.com/items/${a}`).then((response) => {
      this.product = response.data;
    });
  },
};
</script>

<style scoped>

</style>