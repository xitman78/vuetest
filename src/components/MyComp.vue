<template>
  <div class="mycomp">
    <h1>{{ msg }}</h1>
    <h2>My Own Vue Component</h2>
    <el-button type="primary" @click="showAlert">Primary Button</el-button>
  </div>
</template>

<script>

import Vue from 'vue'
import { Button } from 'element-ui'

Vue.component(Button.name, Button)

export default {
  name: 'mycomp',
  data () {
    return {
      msg: 'This is my Component'
    }
  },

  methods: {
    showAlert: () => {
      window.alert('Thank you!!!')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mycomp {
  background-color: white;
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
