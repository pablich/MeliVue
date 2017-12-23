<template lang="pug">
nav.navbar(role="navigation", aria-label="main navigation")
  .container
    .navbar-brand
      router-link.navbar-item(to="/")
        img(src="./../../assets/logo.png")
        label MeliVue
        button.button.navbar-burger
          span
          span
          span
    .navbar-menu
      .navbar-start
        .navbar-item
                .column.is-6.is-offset-3
                  .field.has-addons
                      input.input(
                      type="text",
                      placeholder="Buscar productos...",
                      v-model="searchQuery",
                      @keyup.enter="search",
                      autofocus
                      )
                      a.button.is-primary(@click="search") Buscar
      .navbar-end
          router-link.navbar-item(to="/") Home
          router-link.navbar-item(to="/about")  Acerca 
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    search() {
      this.$store.commit('setCategory', {});
      this.$router.push({ name: 'search', params: { id: this.searchQuery } });
    },
  },
};
</script>

<style>
.navbar {
  background-color: #4e9a79;
}
.navbar-item, .navbar-link {
    color: #fff;
    padding: 0px 10px;
}
.button.is-primary {
    background-color: #35495d;
    border-radius: 0px 3px 3px 0px;
}
input {
  border-radius: 3px 0px 0px 3px;
}
.button.is-primary:hover, .button.is-primary.is-hovered {
    background-color: #365b80;
}
a.navbar-item:hover, a.navbar-item.is-active, a.navbar-link:hover, a.navbar-link.is-active {
    background-color: #35495c;
    color: #fbfdff;
}
.navbar-start {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: space-between;
    margin: auto;
    width: 100%;
}
.navbar-start .navbar-item {
    width: 100%;
}
.navbar-end {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: space-between;
    margin: 0;
}
label {
  font-size: 1.5rem;
  margin-left: 5px
}
</style>