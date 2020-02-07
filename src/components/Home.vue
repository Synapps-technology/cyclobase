<template>
  <div class="hello centered">
    <h4>{{ msg }}</h4>
    <h5 v-show="!$store.getters.isLoggedIn">Veuillez vous identifier pour accéder aux fonctionnalités</h5>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "Bienvenue sur l'interface Back office de CycloBase"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
