<template>
<div>
  <input type="checkbox" v-on:change="toutCompleter()" v-model="checkToutCompleter"> 
  <span v-show="checkToutCompleter">Tout</span>
  <span v-show="!checkToutCompleter">Aucun</span>
  <ul class="todo-list">
    <li class="todo" v-for="todo in filtreTodos" v-bind:key="todo.id" :class="{completed: todo.completed}">
      <div>
        <input type="checkbox" v-model="todo.completed" v-on:change="miseAJourTodo(todo)">
        <label> {{todo.name}} </label>
        <button type="destroy" @click.prevent="supprimerTodo(todo)"></button>
      </div>
    </li>
  </ul>
</div>

<div v-show="siTodos">
  <span><strong> {{ reste }} </strong> tâches faites </span>
  <ul>
    <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
    <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
    <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
  </ul>
  <button v-show="complete" @click.prevent="supprimerComplete">Supprimer tâches finis</button>
</div>
</template>

<script>
export default{
      name: 'App',
      components: {
      },
      data() {
        return {
          todos: [
            {
              id: 1,
              name: 'tache 1',
              completed: false
            },
            {
              id: 2,
              name: 'tache 2',
              completed: true
            },
            {
              id: 3,
              name: 'tache 3',
              completed: true
            },
            {
              id: 4,
              name: 'tache 4',
              completed:false
            }
          ],
          newTodo: '',
          filter: 'all',
          complete: true,
          checkToutCompleter: false
        }
      },
      methods: {
        supprimerTodo(todo){
          let nb = this.todos.indexOf(todo)
          this.todos.splice(nb,1)
        },
        supprimerComplete(){
          this.todos.filter(todo => todo.completed).forEach(todo => this.supprimerTodo(todo));
          this.complete=false;
        },
        toutCompleter(){
          this.todos.forEach(todo => todo.completed = this.checkToutCompleter)
        },
        miseAJourTodo(todo){
          if (todo.completed)
            this.complete = true;
          else this.complete = this.todos.filter(todo => todo.completed)
        }
      },
      computed: {
        reste(){
          return this.todos.filter(todo => todo.completed).length
        },
        filtreTodos(){
          if (this.filter === 'todo'){
            return this.todos.filter(todo => !todo.completed).length != 0
          }
          return this.todos
        },
        siTodos(){
          return true
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