<template>
  <div class="mycomp">
    <router-link to="/">Home</router-link>
    <h1>{{ msg }}</h1>
    <h2>My Own Vue Component</h2>
  </div>
</template>

<script>
export default {
  name: 'mycomp',
  data () {
    return {
      msg: 'This is my Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mycomp {
  background-color: #DDDDDD;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
