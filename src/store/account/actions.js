import axios from 'axios';

export function signup({ commit }, info){
    axios.post('http://138.68.74.39/api/register?name='+info['name']+'&email='+info['email']+'&password='+info['password'])
            .then(response => {commit("login", response.data);
            axios.get('http://138.68.74.39/api/user', {headers: {'Authorization': 'Bearer '+response.data["token"]}})
                .then(response => {commit("accountInformation", response.data);})})
}

export function login({ commit }, info){
    axios.post('http://138.68.74.39/api/login?email='+info['email']+'&password='+info['password'])
            .then(response => {commit("login", response.data);
                axios.get('http://138.68.74.39/api/user', {headers: {'Authorization': 'Bearer '+response.data["token"]}})
                    .then(response => {commit("accountInformation", response.data);})})
}

export function test(state, info){
  console.log("test")
  let a2 = {"a": "a"}
  console.log(a2)
  console.log(info['a'])
}
