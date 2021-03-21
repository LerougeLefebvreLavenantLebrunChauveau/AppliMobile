<template>
    <div class="home">
      <h1>This is a home page.</h1>
      {{ getName }}
      azeaze
      <button  @click='this.loadTodoList({"token": getToken, "id": 847})'>todo</button>
      <button  @click='this.createTodoList({"token": getToken, "name": "testabadoukedapo"})'>newtodolist</button>
      <button  @click='this.deleteTodoList({"token": getToken, "id": "636"})'>deletelist</button>
      <button  @click='this.createTodo({"token": getToken, "name": "testabadoukedapo2", "completed": 0, "id": 637})'>newtodo</button>
      <button  @click='this.deleteTodo({"token": getToken, "id": "914", "listId": 637})'>deleteTodo</button>
      <button  @click='this.completeTodo({"token": getToken, "id": "915", "listId": 637, "name": "testabadoukedapo2", "completed": 1})'>completeTodo</button>
      <button  @click='this.modifyTodo({"token": getToken, "id": "1318", "listId": 847, "name": "testabadoukedapo2", "completed": 0})'>patchTodo</button>
      <button  @click='this.loadTodoLists(getToken)'>todolists</button>
      <button  @click='this.login({"email": "suliac@toto.com", "password": "totototo"})'>Login</button>
      <button  @click='this.logout()'>logout</button>
      <button  @click='this.register({"email": "suliac@toto.com", "name": "Suliac", "password": "totototo"})'>register</button>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: 'Home',
        methods: {
            ...mapActions("account", ['register', 'login', 'logout']),
            ...mapActions("todolist", ['loadTodoLists','loadTodoList','createTodoList','deleteTodoList','createTodo','deleteTodo','completeTodo','modifyTodo']),
            testla(){
              console.log("a")
            },
        },
        computed: {
            ...mapGetters("account", ['getName','getToken']),
        }
    }
</script>
