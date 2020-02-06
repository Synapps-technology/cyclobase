<template>
  <div id="navBar" >
    <b-navbar  class="navbar-custom">
      <b-navbar-brand href="#">CycloBase</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">X</b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav>

          <b-nav-item href="#/users/">Users</b-nav-item>
          <b-nav-item href="#" disabled>Jeux d'item</b-nav-item>
          <b-nav-item href="#" disabled>Relevés</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-on:click="logout" right>Deconnexion</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

  export default {
    name: "NavBar",
    template: '#navBar',
    methods: {
      logout: function (event) {
        this.$store.dispatch('logout',this);
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .navbar-custom {
    background-color: #00637c;
    border-color: #009688;
  }
  /* change the brand and text color */
  .navbar-custom .navbar-brand,
  .navbar-custom .navbar-text {
    color: rgba(255,255,255,.8);
  }
  /* change the link color */
  .navbar-custom .navbar-nav .nav-link {
    color: rgba(255,255,255,.5);
  }
  /* change the color of active or hovered links */
  .navbar-custom .nav-item.active .nav-link,
  .navbar-custom .nav-item:focus .nav-link,
  .navbar-custom .nav-item:hover .nav-link,
  .navbar-custom .nav-item-dropdown{
    color: #ffffff;
  }
</style>
