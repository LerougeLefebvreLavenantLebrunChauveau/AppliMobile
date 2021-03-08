<template>
<div class="creation">
    <h1>Ajouter des tâches à une liste</h1>
    <form action="POST">
      <label for="selectListe"> Choisir une liste </label>
      <select name="liste" id="liste">
        <option value=""> -- Choisir une liste -- </option>
        <option value="" v-for="todo in filtreTodos" v-bind:key="todo.id"> {{todo.name  }} </option>
      </select>
      <br>
      <label>Nom de la tâche <input type="text" name="nomTâche" value=""/></label>
      <br>
      <input type="button" value="Ajouter tâche">
    </form>
    <hr>
  </div>

 <div>
    <ul class="todo-list">
      <li class="todo" v-for="todo in filtreTodos" v-bind:key="todo.id">
        <div>
          <label> {{todo.name}} </label>
          <button type="destroy" @click.prevent="supprimerTodo(todo)"></button>
        </div>
      </li>
    </ul>
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
        }
      },
      computed: {
        filtreTodos(){
          if (this.filter === 'todo'){
            return this.todos.filter(todo => !todo.completed).length != 0
          }
          return this.todos
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