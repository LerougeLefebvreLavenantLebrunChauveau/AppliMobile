<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/account">Account</router-link> | 
    <router-link to="/lists">Lists</router-link> |
    <router-link to="/creation_deletion_lists">Créer/Supprimer listes</router-link> |
    <router-link to="/creation_deletion_tasks">Gérér listes</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
