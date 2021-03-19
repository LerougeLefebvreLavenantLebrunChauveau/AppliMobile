<template>
<div class="creation">
    <h1>Ajouter des tâches à une liste</h1>
    <form action="POST">
      <label for="selectListe"> Choisir une liste </label>
      <select v-model="selected">
        <option v-for="myList in listes" :value="myList.id" v-bind:key="myList.id"> {{myList.name}} </option>
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
          listes:[
            {
              id: "1",
              name: 'Une première liste',
              filter: 'all',
              complete: false,
              checkToutCompleter: false,
              newTodo : ''
            },
            {              
              id: "2",
              name: 'Une seconde liste',
              filter: 'all',
              complete: false,
              checkToutCompleter: false,
              newTodo : ''
            }
          ],
          selected:'',
          listeVide : ''
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