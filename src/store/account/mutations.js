export function login(state, data) {
    console.log(data);
    state.token = data["token"];
}

export function accountInformation(state, data){
    console.log(data);
    state.name = data["name"]
    state.email = data["email"]
    state.id = data["id"]
}
