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

export function logout(state){
    console.log("logout");
    state.name = null
    state.email = null
    state.id = null
}
