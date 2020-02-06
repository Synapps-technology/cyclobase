<template>
  <div class="userList">
    <b-list-group>
      Liste des utilisateurs
      <b-list-group-item v-for="user in userList" v-bind:key="user.id">
        {{ user.username }}
      </b-list-group-item>
    </b-list-group>
    <button v-on:click="$router.push('/users/add')">Ajouter un utilisateur</button>
  </div>
</template>

<script>
    export default {
      name: "UserList",
      created() {
        var self = this;
        this.$http
          .get('https://cyclobase-backend-staging.herokuapp.com/api/v1/users/')
          .then(function (response) {
            console.log(response);
            self.userList = response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
      }, data: function () {
        return {
          userList: "",
        }
      }
    }
</script>

<style scoped>
  .userList{
    margin: auto;
    width: 640px;
  }
</style>
