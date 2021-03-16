<template>

  <div class="login">
    <h3>Sign in</h3>
    <form action="POST">
      <label>username <input type="text" name="username" value=""/></label>
      <label>password <input type="text" name="password" value=""/></label>
      <button type="submit"> Connexion </button>
    </form>
</div>

<div class="Register">
  <h3> No account ? Sign up here </h3>
    <form action="POST">
      <label>username <input type="text" name="username" value=""/></label>
      <label>email <input type="text" name="email" value=""/></label>
      <label>password <input type="text" name="password" value=""/></label>
      <label>confirm password <input type="text" name="password" value=""/></label>
      <button type="submit"> Register </button>
    </form>
  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import Bien from '@/components/Bien.vue';
export default {
  name: 'App',
  components: {
    //Bien
  },
  computed: {
    ...mapGetters("immo", ["biens"])
  },
  
  methods: {
    ...mapActions("immo", ['load'])
  },
  
  mounted() {
            this.load();
  }
}
</script>

<style> 
  form {
    display:grid;
    grid-template-columns:auto;
  }
  button {
    width:100px;
    margin-left:auto;
    margin-right:auto;
  }
</style>