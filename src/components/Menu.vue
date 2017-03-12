<template>
  <div class="mycomp">
    <router-link to="/" class="menu-link">Home</router-link>
    <router-link to="/about" class="menu-link">About</router-link>
    <router-link to="/products" class="menu-link">Products</router-link>
  </div>
</template>

<script>

export default {
  name: 'NavMenu',
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.menu-link {
  margin: 6px 10px
}

</style>
