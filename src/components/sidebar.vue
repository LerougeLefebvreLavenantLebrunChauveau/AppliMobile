<template>
<div>
  <div>
    <div class="bloc_middle">
        <h1> <label> Créer une liste </label> </h1>
        <input id="newList" v-model="this.newList" type="name" name="newList" placeholder="Entrez le nom de la liste" required>
        <button @click.prevent='checkForm()'> Créer </button>

    <div @click='this.loadTodoLists(getToken)'>
    <select id="selectTodoList">
        <option value="base">Vos Listes</option>
        <option v-for="todolist in getTodolists" :value="todolist.id" v-bind:key="todolist.id" v-bind:id="todolist.id" v-bind:name="todolist.name" @click='this.loadTodoList({"token": getToken, "id": todolist.id}); this.saveElements(todolist.name,todolist.id)'> 
        {{todolist.name}}
        </option>
    </select>
    </div>

    <ajout-tasks :id="listID" :token="this.getToken" :nameList="listName"></ajout-tasks>

    <ul>
        <li v-for="todo in filteredTodos" v-bind:key="todo.id" :class="{completed: todo.completed}" v-on:click="reste()">
            <todos v-show="this.getTodolist.length > 0" :idTodo="todo.id" :idList="todo.todolist_id" :nameTodo="todo.name" :completed="todo.completed" :nameList="listName" :token="this.getToken" ></todos>
        </li>
    </ul>

    <div>
        <span><strong> {{ remaining }} </strong> tâches faites </span> 
        <button  @click="supprimerComplete()">Supprimer tâches finis</button>
    </div>
    <div>
    <ul>
        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
        <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
        <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
    </ul>
    </div>


    <div>
        <h3> <label> Supprimer la liste courante</label> </h3>
        <button  @click='deletodolist()'>Supprimer</button>
    </div>
    
    </div>
  </div>
</div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AjoutTasks from './ajoutTasks.vue';
import Todos from './Todos.vue';
   export default{
        name: 'sidebar',
        components: {
                Todos,
                AjoutTasks,
        },
        data() {
            return {
                listName:'',
                listID:0,
                newList:'',
                remaining:0,
                filter:'all',
            }
        },
        methods: { 
            ...mapActions("todolist", ['loadTodoLists','loadTodoList','deleteTodoList', 'createTodoList', 'deleteTodo']),
            checkForm(){
                if((this.newList && (this.newList = this.newList.trim(this.newList)))){
                    this.createTodoList({"token": this.getToken, "name": this.newList});
                    document.getElementById("selectTodoList").value = "base";
                }
            },
            deletodolist(){
                this.deleteTodoList({"token": this.getToken, "id": this.listID});
                document.getElementById("selectTodoList").value = "base";
            },
            saveElements(name, id){
                this.listName = name;
                this.listID = id;
                this.remaining = this.getTodolist.filter(todo => todo.completed == 1).length;
            },
            supprimerComplete(){
                this.getTodolist.filter(todo => todo.completed).forEach(todo => this.deleteTodo({"token": this.getToken, "id": todo.id, "listId" : todo.todolist_id}));
            },
            reste(){
                this.remaining = this.getTodolist.filter(todo => todo.completed == 1).length;
            },
        },
        computed: {
            ...mapGetters("todolist",['getTodolists','getTodolist']),
            ...mapGetters("account", ['getToken']),
            filteredTodos(){
                if(this.filter==='todo'){
                    return this.getTodolist.filter(todo => !todo.completed)
                }else if(this.filter==='done'){
                    return this.getTodolist.filter(todo => todo.completed)
                }else{
                    return this.getTodolist
                }
            }
        }
        

    }
</script>

<style>

    li.todo{
      color:red;
    }
    li.completed{
      color:green;
    }
    button{
      border : 1px solid #848484 !important;
      font-size: 0.7em !important;
    }
    ul{
      list-style-type: none;
    }
    .bloc_middle{
        background-color: orange;
        margin: 0 auto;
        border-radius: 5px;
    }

</style>
