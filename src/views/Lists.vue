<template>
<div>
  <button  @click='this.createTodoList({"token": getToken, "name": "newList2"})'>newtodolist</button>
  <button  @click='this.loadTodoLists(getToken)'>todolists</button>
  <button  @click='this.deleteTodoList({"token": getToken, "id": "726"})'>deletelist</button>
  <button  @click='this.loadTodoList({"token": getToken, "id": 637})'>todo</button>
  <button  @click='this.completeTodo({"token": getToken, "id": "915", "listId": 637, "name": "testabadoukedapo2", "completed": 1})'>completeTodo</button>
  <button  @click='this.deleteTodo({"token": getToken, "id": "914", "listId": 637})'>deleteTodo</button>
  <br />
  <label>Choisir une liste</label>
  <br/>
  <select @click.prevent='this.loadTodoLists(getToken)'>
    <option v-for="todolist in getTodolists" :value="todolist.id" v-bind:key="todolist.id" @click='this.loadTodoList({"token": getToken, "id": todolist.id})'> 
      {{todolist.name}}
    </option>
  </select>
  <br />
  <input type="checkbox" v-on:change="toutCompleter()" v-model="checkToutCompleter"> 
  <span v-show="checkToutCompleter">Tout</span>
  <span v-show="!checkToutCompleter">Aucun</span>
  
  <ul>
    <li class="todo" v-for="todo in getTodolist" v-bind:key="todo.id" :class="{completed: todo.completed}">
      <div>
        <input type="checkbox" v-model="todo.completed" v-on:change="completeTodo">
        <label> {{todo.name}} </label>
        <button type="destroy" @click='this.deleteTodo({"token": getToken, "id": todo.id, "listId" : todo.todolist_id})'></button>
        <!--<input type="hidden" value="todo.id">
        <input type="hidden" value="todo.todolist_id">-->
      </div>
    </li>
  </ul>
</div> 

<div>
      <button  @click.prevent="supprimerComplete()">Supprimer tâches finis</button>
</div>



  <!--<div v-show="siTodos">
  <span><strong> {{ reste }} </strong> tâches faites </span>
  <ul>
    <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
    <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'" >A faire</a></li>
    <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
  </ul>
  <button  @click.prevent="supprimerComplete">Supprimer tâches finis</button>
  <button v-show="complete" @click.prevent="supprimerComplete">Supprimer tâches finis</button> Fonctionne
  
  </div> -->

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
          id:'',
          todolistID:'',
        }
      },
      methods: { 
        ...mapActions("todolist", ['loadTodoLists','loadTodoList','deleteTodoList','deleteTodo','completeTodo', 'createTodoList']),
     
       /*deleteTodo(todo){
          let nb = this.listeVide.todos.indexOf(todo)
          this.listeVide.todos.splice(nb,1)
        },*/
       /* supprimerComplete(){
          this.getTodolist.filter(todo => todo.completed).forEach(todo => this.deleteTodo({"token": this.getToken, "id": todo.id, "listId" : todo.todolistID}));
        },*/
        toutCompleter(){
          this.getTodolist.forEach(todo => todo.completed = this.checkToutCompleter)
        },
        /*miseAJourTodo(todo){
          if (todo.completed)
            this.complete = true;
          else this.complete = this.listeVide.todos.filter(todo => todo.completed)
        },*/
      },
      computed: {
        ...mapGetters("todolist",['getTodolists','getTodolist']),
        ...mapGetters("account", ['getToken'])
        /* reste(){
          if(this.listeVide.length==0){
            return;
          }
          else{
            return this.listeVide.todos.filter(todo => todo.completed).length
          }
        },
        filter(){
          if(this.listeVide.filter === 'todo'){
            return this.listeVide.todos.filter(todo => !todo.completed).length != 0;
          }
          else if(this.listeVide.filter === 'done'){
            return this.listeVide.todos.filter(todo => todo.completed);
          }
          else{
            return this.listeVide.todos
          }
        },
        siTodos(){
          return true
        }, */
        
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