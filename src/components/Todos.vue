<template>

        <input type="checkbox"  @click='completion(idList,idTodo,nameList)'>
        <label> {{nameTodo}} </label>
        <button type="destroy" class="deletion" @click='this.deleteTodo({"token": token, "id": idTodo, "listId" : idList})'>Supprimer tâche</button>
        <button @click="this.modified=true">Modifier la tâche</button>

        <div v-show="this.modified">
            <input id='newName' v-model="this.newName" type="name" name="newName" placeholder="Entrez le nouveau nom de la tâche">
            <button @click='checkFormModifTasks()'> Modifier </button>
        </div>


</template>

<script>
  import { mapActions } from "vuex";
   export default{
        name: 'Todos',
        components: {

        },
        data() {
            return {
                modified:false,
                newName:'',
                binaryComplete:0,
                checked:false,
            }
        },
        props:{
            idList: {type: Number, default:0},
            idTodo:{type: Number, default:0},
            nameTodo:{type: String, default:''},
            nameList:{type: String, default:''},
            completed:{type:Number, default:0},
            token:{type:String, default:''}
        },
        methods: { 
            ...mapActions("todolist", ['deleteTodo','completeTodo', 'modifyTodo']),
            checkFormModifTasks(){
                if((this.newName && (this.newName = this.newName.trim(this.newName)))){
                    this.modifyTodo({"token": this.token, "id": this.idTodo, "listId": this.idList, "name": this.newName, "completed": 0})
                }
                this.modified=false;
            },
            completion(id,idTodo,nameList){
                if(this.binaryComplete == 0){
                    this.completeTodo({"token": this.token, "id": idTodo, "listId": id, "name": nameList, "completed": 1});
                    this.binaryComplete = 1
                } else if(this.binaryComplete == 1){
                    this.completeTodo({"token": this.token, "id": idTodo, "listId": id, "name": nameList, "completed": 0});
                    this.binaryComplete = 0;
                }
            },
        }
    }
</script>

<style>

    ul{
        padding-left:40px;
    }

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