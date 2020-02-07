<template>
  <div class="centered">
      <h7>Liste des utilisateurs</h7>
      <b-list-group class="userList" >
        <b-list-group-item v-for="user in userList" v-bind:key="user.id" class="list-group-item row d-flex">
          <div>{{ user.username }}</div>
        </b-list-group-item>
      </b-list-group>
    <input type="submit" class="fadeIn fourth" value="Ajouter un utilisateur" v-on:click="$router.push('/users/add')">
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
    marin: 50px 0px 0px 50px;
    width: 640px;
  }
</style>
