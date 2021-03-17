<template>
  <form id="lists" action="" method="post"> 
    <h1> <label for="creation"> Créer une liste </label> </h1>
    <input id="lists" v-model="lists" type="text" name="lists" placeholder="Entrez le nom de la liste">
    <input type="submit" @click="checkForm(event)" name="submit" value="submit">
  </form>
  
</template>

<script>
export default{
      name: 'App',
      components: {
      },
      data() {
        return {
          lists : null,
        }
      },
      methods: {
        checkForm: function (e) {
          if(this.listes.length != 0){
            console.log(this.listes);
            return true;
          }
          e.preventDefault();
        }
      }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    li.todo{
      color:red;
    }
    li.completed{
      color:green;
    }
</style>