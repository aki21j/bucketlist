<template>
  <div id="login">
    <div class="row justify-content-md-center">
      <div class="col-4">
        <form action="" class="bg-light p-4 rounded mt-5">
          <h2>Login</h2>
          <div class="form-group">
            <label for="">Username</label>
            <input type="text" placeholder="Username" v-model="username" class="form-control">

          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input type="password" placeholder="Password" v-model="password" class="form-control">
          </div>
          <button type="button" class="btn btn-primary" @click="doLogin()">Login</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import { auth } from '../api/index'
import axios from 'axios';
import cookies from 'vue-cookies'
export default {
  name: "login",
  data:() =>({
    username:'',
    password:'',
  }),
  methods:{
    doLogin(){
      const vm = this;
      if(this.username!= '' && this.password!=''){
        axios.post(auth.login(), {
          username: vm.username,
          password: vm.password
        })
        .then(response => {
          console.log(response);
          if(response.status == 200){
            cookies.set('token', response.data.token);
            window.location.reload();
          }
        })
        .catch(error => {
          console.log(error);
        })
      }
    }
  },
  created(){
    if(cookies.get('token')){
      this.$router.push('/');
    }
  }

}
</script>

<style>

</style>
