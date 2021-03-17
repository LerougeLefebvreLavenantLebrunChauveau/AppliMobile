<template>
    <div class="home">
      <h1>This is a home page.</h1>
      {{ getName }}
      azeaze
      <button  @click='this.test({"a": "a", "b": "b"})'>test</button>
      <button  @click='loginWithToken'>token</button>
      <button  @click='this.login({"email": "toto@toto.com", "password": "totototo"})'>Login</button>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: 'Home',
        methods: {
            ...mapActions("account", ['test', 'login']),
            testla(){
              console.log("a")
            },
        },
        computed: {
            ...mapGetters("account", ['getName']),
        }
    }
</script>
