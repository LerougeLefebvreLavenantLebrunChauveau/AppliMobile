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

<div v-show="selected">
  <h1> Modifier la tâche d'une liste </h1>
  <select @click.prevent='this.loadTodoList({"token": getToken, "id": this.listID})'>
    <option value="">Vos Tâches</option>
    <option v-for="todos in getTodolist" :value="todos.id" v-bind:key="todos.id" @click='this.saveTodo(todos.id)'> 
      {{todos.name}}
    </option>
  </select>
  <input id='newName' v-model="this.newName" type="name" name="newName" placeholder="Entrez le nouveau nom de la tâche">
  <button @click='checkForm()'> Modifier </button>
</div>

<div v-show="modified">
  <h3> La tâche a été modifié avec succés! </h3>
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
          modified:false,
          nameTask:'',
          newName:'',
          todoID:''
        }
      },
      methods: {
          ...mapActions("todolist", ['loadTodoLists','loadTodoList','deleteTodo','createTodo','modifyTodo']),
          saveElements(name,id){
          this.listName = name;
          this.listID = id;
          this.selected=true;
        },
          saveTodo(id){
            this.todoID = id;
          },  
        checkForm(){
          if((this.nameTask && (this.nameTask = this.nameTask.trim(this.nameTask)))){
              this.createTodo({"token": this.getToken, "name": this.nameTask, "completed": 0, "id": this.listID});
              this.created=true;
          } else if((this.newName && (this.newName = this.newName.trim(this.newName)))){
              this.modifyTodo({"token": this.getToken, "id": this.todoID, "listId": this.listID, "name": this.newName, "completed": 0})
              this.modified= true;
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