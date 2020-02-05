<template>
  <div class="userList">
    <ul id="v-for-object" class="demo">
      Liste des utilisateurs
      <li v-for="user in userList">
        {{ user.username }}
      </li>
    </ul>
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
