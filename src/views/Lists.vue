<template>
<div>
  <label>Choisir une liste</label>
  <br/>
  <select @click.prevent='this.loadTodoLists(getToken)'>
    <option value="">Vos Listes</option>
    <option v-for="todolist in getTodolists" :value="todolist.id" v-bind:key="todolist.id" @click='this.loadTodoList({"token": getToken, "id": todolist.id}); this.saveElements(todolist.name);'> 
      {{todolist.name}}
    </option>
  </select>
  <br />
  <input type="checkbox" @click='toutCompleter(); reste()' v-model="checkToutCompleter"> 
  <span v-show="checkToutCompleter">Aucun</span>
  <span v-show="!checkToutCompleter">Tout</span>
  
  <ul v-show="selected">
    <li class="todo" v-for="todo in getTodolist" v-bind:key="todo.id" :class="{completed: todo.completed}">
      <div>
        <input type="checkbox" v-model="todo.completed" v-on:change='completion(todo.todolist_id,todo.id); reste()'>
        <label> {{todo.name}} </label>
        <button type="destroy" @click='this.deleteTodo({"token": getToken, "id": todo.id, "listId" : todo.todolist_id})'></button>
      </div>
    </li>
  </ul>
</div> 

 <div v-show="selected"> 
   <div>
   <span><strong> {{ this.remaining }} </strong> tâches à faire </span> 
 <!-- <ul>
    <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
    <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'" >A faire</a></li>
    <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
  </ul>-->  
  <button  @click.prevent="supprimerComplete()">Supprimer tâches finis</button>
   </div>
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
          checkToutCompleter:false,
          todolistName:'',
          todos:[],
          selected:false,
          remaining:'',
          binaryComplete:0,
        }
      },
      methods: { 
        ...mapActions("todolist", ['loadTodoLists','loadTodoList','deleteTodoList','deleteTodo','completeTodo', 'createTodoList']),
        supprimerComplete(){
          this.getTodolist.filter(todo => todo.completed).forEach(todo => this.deleteTodo({"token": this.getToken, "id": todo.id, "listId" : todo.todolist_id}));
        },
        toutCompleter(){
          if(this.binaryComplete == 0){
            this.getTodolist.filter(todo => todo.id).forEach(todo => this.completeTodo({"token": this.getToken, "id": todo.id, "listId": todo.todolist_id, "name": this.todolistName, "completed": this.binaryComplete}));
            this.binaryComplete = 1
          } else if(this.binaryComplete == 1){
            this.getTodolist.filter(todo => todo.id).forEach(todo => this.completeTodo({"token": this.getToken, "id": todo.id, "listId": todo.todolist_id, "name": this.todolistName, "completed": this.binaryComplete}));
            this.binaryComplete = 0
          }
        },
        completion(id,idTodo){
          if(this.binaryComplete == 0){
            this.completeTodo({"token": this.getToken, "id": idTodo, "listId": id, "name": this.todolistName, "completed": this.binaryComplete});
            this.binaryComplete = 1
          } else if(this.binaryComplete == 1){
            this.completeTodo({"token": this.getToken, "id": idTodo, "listId": id, "name": this.todolistName, "completed": this.binaryComplete});
            this.binaryComplete = 0;
          }
          
        },
        saveElements(name){
          this.todolistName = name;
          this.selected=true;
        },
        reste(){
          if(this.getTodolist.length==0){
            this.remaining;
          }
          else{
            this.remaining = this.getTodolist.filter(todo => todo.completed).length
          }
        },
      },
      computed: {
        ...mapGetters("todolist",['getTodolists','getTodolist']),
        ...mapGetters("account", ['getToken']),
        getTodoArray(){
          return this.todos;
        },
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