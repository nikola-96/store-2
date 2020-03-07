<template>
  <div id="app">
    <div>
      <b-nav tabs align="center">
        <b-nav-item active><router-link to="/">Products</router-link></b-nav-item>
        <b-nav-item><router-link to="/customers">Customers</router-link></b-nav-item>
      </b-nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
