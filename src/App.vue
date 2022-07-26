<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  background: rgb(0, 201, 183);
  background: radial-gradient(circle, rgba(0, 201, 183, 1) 0%, rgba(92, 69, 142, 1) 100%);
  padding-top: 20px;
}

.basic {
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.4);
  position: relative;
  margin: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
