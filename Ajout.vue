<template>
<div class="creation">
    <h1>Ajouter des tâches à une liste</h1>
    <select @click.prevent='this.loadTodoLists(getToken)'>
    <option value="">Vos Listes</option>
    <option v-for="todolist in getTodolists" :value="todolist.id" v-bind:key="todolist.id" @click='this.loadTodoList({"token": getToken, "id": todolist.id}); 
                                              this.saveElements(todolist.name, todolist.id)'> 
      {{todolist.name}}
    </option>
  </select>
</div>

<div v-show="selected">
  <label> Nom de la tâche </label>
  <input id="nameTask" v-model="this.nameTask" type="name" name="nameTask" placeholder="Entrez le nom de la tâche">
  <button @click='checkForm()'> Créer </button>
</div>

<div v-show="created">
  <h3> La tâche a été ajouté avec succés! </h3>
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
          listName:'',
          listID:'',
          selected:false,
          created:false,
          nameTask:'',
        }
      },
      methods: {
          ...mapActions("todolist", ['loadTodoLists','loadTodoList','deleteTodo','createTodo']),
          saveElements(name,id){
          this.listName = name;
          this.listID = id;
          this.selected=true;
        },
        checkForm(){
          if((this.nameTask && (this.nameTask = this.nameTask.trim(this.nameTask)))){
              this.createTodo({"token": this.getToken, "name": this.nameTask, "completed": 0, "id": this.listID});
              this.created=true;
          }
        }
      },
      computed: {
          ...mapGetters("account", ['getToken']),
          ...mapGetters("todolist",['getTodolists','getTodolist']),
      }
    }
</script>

<style>
    body{
      font-family: sans-serif;
      background: url(https://i.pinimg.com/originals/c4/37/20/c4372023c6aa150f82105e8a92c8851a.jpg) no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
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
    h1 {
     background-color: #089D9B;
     border-radius: 10px;
    }
</style>