<template>
<div>
  <label>Choisir une liste</label>
  <br />
  <select v-model="selected" v-on:change="getListes($event)">
    <option v-for="myList in listes" :value="myList.id" v-bind:key="myList.id"> {{myList.name}} </option>
  </select>
  <br />
  <input type="checkbox" v-on:change="toutCompleter()" v-model="checkToutCompleter"> 
  <span v-show="checkToutCompleter">Tout</span>
  <span v-show="!checkToutCompleter">Aucun</span>
  <ul class="todo-list">
    <li class="todo" v-for="todo in listeVide.todos" v-bind:key="todo.id" :class="{completed: todo.completed}">
      <div>
        <input type="checkbox" v-model="todo.completed" v-on:change="miseAJourTodo(todo)">
        <label> {{todo.name}} </label> 
        <button type="destroy" @click="deleteTodo(todo)"></button>
      </div>
    </li>
  </ul>
</div> 

  <div v-show="siTodos">
  <span><strong> {{ reste }} </strong> tâches faites </span>
  <ul>
    <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
    <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'" >A faire</a></li>
    <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
  </ul>
  <button  @click.prevent="supprimerComplete">Supprimer tâches finis</button>
  <!--<button v-show="complete" @click.prevent="supprimerComplete">Supprimer tâches finis</button> Fonctionne --> 
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
              todos: [
              {
                id: 1,
                name: 'Acheter du lait',
                completed: false
              },
              {
                id: 2,
                name: 'Sortir le chien',
                completed: false
              },
              {
                id: 3,
                name: 'Jouer aux echecs',
                completed: false
              },
              {
                id: 4,
                name: 'Faire une game CS avec Démarrage au kicker, Minitosore et Capsylon',
                completed:false
              }],
              filter: 'all',
              complete: false,
              checkToutCompleter: false
            },
            {              
              id: "2",
              name: 'Une seconde liste',
              todos: [
              {
                id: 1,
                name: 'Mater Netflix',
                completed: false
              },
              {
                id: 2,
                name: 'Mater Amazon Prime',
                completed: false
              },
              {
                id: 3,
                name: 'Mater Disney +',
                completed: false
              },
              {
                id: 4,
                name: 'Se désabonner de Salto',
                completed:false
              }],
              filter: 'all',
              complete: false,
              checkToutCompleter: false
            }
          ],
          selected:'',
          listeVide : ''
        }
      },
      methods: { 
        deleteTodo(todo){
          let nb = this.listeVide.todos.indexOf(todo)
          this.listeVide.todos.splice(nb,1)
        },
        supprimerComplete(){
          this.listeVide.todos.filter(todo => todo.completed).forEach(todo => this.deleteTodo(todo));
          this.complete=false;
        },
        toutCompleter(){
          this.listeVide.todos.forEach(todo => todo.completed = this.checkToutCompleter)
        },
        miseAJourTodo(todo){
          if (todo.completed)
            this.complete = true;
          else this.complete = this.listeVide.todos.filter(todo => todo.completed)
        },
        getListes(e){
          let value = e.target.value;
          let liste = this.listes.find(l => l.id == value);
          this.listeVide = liste
        }
      },
      computed: {
        reste(){
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