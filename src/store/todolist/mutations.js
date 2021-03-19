export function loadTodoLists(state, data) {
    console.log(data);
    state.todolists = data
}

export function loadTodoList(state, data) {
    console.log(data);
    state.todolist = data
}

export function unloadTodoList(state, data) {
    console.log(data);
    state.todolist = null
}
