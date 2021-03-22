<template>
  <div>
    <h1> <label> Créer une liste </label> </h1>
    <input id="listName" v-model="this.listName" type="name" name="listName" placeholder="Entrez le nom de la liste" required>
    <button @click='checkForm()'> Créer </button>
  </div>

  <div v-show="this.created">
    <h3> La liste a été crée avec succés! </h3>
  </div>

  <div>
    <h1> <label> Supprimer une liste </label> </h1>
    <select @click.prevent='this.loadTodoLists(getToken)'>
      <option value="">Vos Listes</option>
      <option v-for="todolist in getTodolists" :value="todolist.id" v-bind:key="todolist.id" @click='this.loadTodoList({"token": getToken, "id": todolist.id});
                                                this.saveElements(todolist.id)'> 
        {{todolist.name}}
      </option>
    </select>
    <button  @click='this.deleteTodoList({"token": getToken, "id": this.todolistID}); this.deleted=true'>Supprimer</button>
  </div>

  <div v-show="this.deleted"> 
    <h3> La liste selectionné a bien été supprimé! </h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default{
      name: 'App',
      components: {
      },
      data() {
        return {
          listName : '',
          created:false,
          todolistID:'', 
          deleted:false,
        }
      },
      methods: {
        ...mapActions("todolist", ['createTodoList','loadTodoLists','loadTodoList', 'deleteTodoList']),
        checkForm(){
          if((this.listName && (this.listName = this.listName.trim(this.listName)))){
            this.createTodoList({"token": this.getToken, "name": this.listName});
            this.created=true;
          }
        },
        saveElements(id){
          this.todolistID = id;
          console.log(this.todolistID);
        },
      },
      computed:{
        ...mapGetters("todolist",['getTodolists','getTodolist']),
        ...mapGetters("account", ['getToken']),
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
    }
    li.todo{
      color:red;
    }
    li.completed{
      color: #089D9B;
    }
</style>