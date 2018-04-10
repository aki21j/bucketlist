<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3" v-if="$route.path != '/login'">
      <a class="navbar-brand col-11" href="/">Bucketlist</a>
        <button class="btn btn-link col-1 text-right" @click="logout()">Logout</button>
    </nav>
    <div class="container-fluid px-5">
      <router-view/>
    </div>
    
  </div>
</template>

<script>

import cookies from 'vue-cookies'
import axios from 'axios'

export default {
  name: 'App',
  data:() => ({

  }),
  methods: {
    logout(){
      cookies.remove('token');
      this.$router.push('/login');
    }
  },
  created(){
    if(cookies.get('token') == null){
      this.$router.push('/login');
      console.log('user is not logged in!');
    }else{
      axios.defaults.headers.common['Authorization'] = 'Token ' + cookies.get('token');
    }
  },
    watch: {
    '$route': function() {
      if (cookies.get('token') == null) {
        this.$router.push('/login');
        console.log('user is not logged in!');
      } else {
        axios.defaults.headers.common['Authorization'] = 'Token ' + cookies.get('token');
      }
    }

  }
}
</script>

<style>

</style>
