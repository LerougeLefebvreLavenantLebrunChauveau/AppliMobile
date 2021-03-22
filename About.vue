<template>
<div class = "login-box">
<div v-show="this.getName == null" class="connect">

  <div class="login">
    <h3>Sign in</h3>
    <form @submit.prevent="submit">
      <label>email <input type="email" name="email" v-model="logi.email" required/></label>
      <label>password <input type="password" name="password" v-model="logi.password" required/></label>
      <button  @click='this.login({"email": ""+logi.email, "password": ""+logi.password})'>Login</button>
    </form>
</div>

<div class="Register">
  <h3> No account ? Sign up here </h3>
     <form @submit.prevent="submit"> 
      <label>username <input type="text" name="name" v-model="regi.name"/></label>
      <label>email <input type="email" name="email" v-model="regi.email" required/></label>
      <label>password <input type="password" name="password" v-model="regi.password" required/></label>
      <button  @click='registerT()'>Register</button>
    </form>
  </div>
</div>

  <div v-show="this.getName != null">
    <p>Hello {{ this.getName }}.</p> 
    <p> Your email : {{ this.getEmail }}</p>
  <button @click="this.logout()"> Log out </button>
  </div>
</div>

</template>

<script>
  import { mapActions, mapGetters } from "vuex";
    export default {
        name: 'Home',
        data() {
          return {
          logi: {
            email: "",
            password: "",
          },
          regi: {
            name:"",
            email: "",
            password:"",
          },
          isConnected:false
          };
        },
        methods: {
            ...mapActions("account", ['logout', 'login','register','disconnect']),
            testla(){
              console.log("a")
            },
            registerT() {
              this.register({"name":""+this.regi.name,"email": ""+this.regi.email ,"password": ""+this.regi.password});
            }
        },
        computed: {
            ...mapGetters("account", ['getName','getToken','getEmail']),
        },
    }
  
</script>

<style>
  .login-box{
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: black;
  }
  .login-box h3{
    float: center;
    font-size: 40px;
    border-bottom: 6px solid #00BFFF;
    margin-bottom: 50px;
    padding: 13px 0;
  }
  label{
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    border-bottom: 1px solid #00BFFF;
  }

  button {
    width: 100%;
    border: 2px solid #00BFFF;
    color: black;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
    margin: 12px 0;
  }
  .login {
    background-color: white;
  }
  .Register{
    background-color: white;
    display: block;
  }
</style>