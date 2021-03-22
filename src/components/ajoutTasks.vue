<template>
    <button @click.prevent="this.created=true">Ajouter des tâches a la liste courante </button>

    <div v-show="this.created == true">
        <label> Nom de la tâche </label>
        <input id="nameTask" v-model="this.nameTask" type="name" name="nameTask" placeholder="Entrez le nom de la tâche">
        <button @click='checkFormCreateTasks()'> Créer </button>
    </div>

    <div>
        <input type="checkbox" @click='toutCompleter(); reste()' v-model="checkToutCompleter"> 
        <span v-show="!checkToutCompleter">Tout</span>
        <span v-show="checkToutCompleter">Aucun</span>
    </div>


</template>

<script>
  import { mapActions, mapGetters } from "vuex";
   export default{
        name: 'AjoutTasks',
        components: {
            
        },
        data() {
            return {
                created:'false',
                nameTask:'',
                binaryComplete:0,
                checkToutCompleter:false
            }
        },
        props:{
            id:{type:Number, default:0},
            token:{type:String, default:''},
            nameList:{type:String, default:''}
        },
        methods: { 
            ...mapActions("todolist", ['createTodo', 'completeTodo']),
            checkFormCreateTasks(){
                if((this.nameTask && (this.nameTask = this.nameTask.trim(this.nameTask)))){
                    this.createTodo({"token": this.token, "name": this.nameTask, "completed": 0, "id": this.id});
                } 
                this.created=false;
            },
            toutCompleter(){
                if(this.binaryComplete == 0){
                    this.getTodolist.filter(todo => todo.id).forEach(todo => this.completeTodo({"token": this.token, "id": todo.id, "listId": todo.todolist_id, "name": this.nameList, "completed": 1}));
                    this.binaryComplete = 1
                } else if(this.binaryComplete == 1){
                    this.getTodolist.filter(todo => todo.id).forEach(todo => this.completeTodo({"token": this.token, "id": todo.id, "listId": todo.todolist_id, "name": this.nameList, "completed": 0}));
                    this.binaryComplete = 0
                }
            },
        },
        computed:{
            ...mapGetters("todolist",['getTodolist']),
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
      width: 93%;
      list-style-type: none;
    }


</style>