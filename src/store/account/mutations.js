export function login(state, data) {
    console.log(data["token"]);
    state.token = data["token"];
}

export function accountInformation(state, data){
    console.log(data["name"]);
    state.name = data["name"]
    state.email = data["email"]
    state.id = data["id"]
}
