<template>

  <div> <!-- Main Container -->

    <!--Navbar -->
    <NavBar />

    <!-- Body Content -->
    <div class="container page-wrap">
      <router-view />
    </div>

    <!--Footer -->
    <footer class="fixed-bottom  ">
      <div class="container">
        <span>© Ronald P Softwares Pty Ltd 2018 – 2022. All Rights Reserved.</span>
      </div>
    </footer>

  </div> <!--End of container-->
</template>


<script>

// import Customer from "@/components/CustomerLs.vue";
// import Employee from "@/components/Employee.vue"
// import Counter from "@/components/Counter.vue"
// import Greeting from "@/components/Greetings.vue"
// import Register from "@/components/Register.vue"
// import AuthUser from "@/components/AuthenticateUser.vue"
// import Userlist from "@/components/UserList.vue"
import NavBar from "@/components/Navbaar.vue"

export default {

  components: {
    // Customer,
    // Employee,
    // Counter,
    // Greeting,
    // Register,
    // AuthUser,
    // Userlist,  
    NavBar,

  },
};
</script>

<style>
@import "./assets/style/style.css";
</style>

<!--
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
-->
