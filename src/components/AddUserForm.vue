<template>
  <div class="addUserForm">
    Ajouter un utilisateur
    <form v-on:submit.prevent="addUser">
      <input type="text" placeholder="Nom d'utilisateur"><br>
      <input type="password" placeholder="Mot de passe"><br>
      <button type="submit" >Ajouter</button>
    </form>
    <div v-bind:class="getClass()" v-show="message!==''">
      <i class="fa fa-times-circle"></i>
      {{ message }}
    </div>
  </div>
</template>

<script>
    export default {
      name: "AddUserForm",
      data : function () {
        return  {
          message: "",
          hasError: false
        }
      },
      methods: {
        addUser: function (event) {

          var payload = {
            userName: event.target[0].value,
            password: event.target[1].value
          };

          var self = this;
          self.hasError = false;

          this.$http
            .post('https://cyclobase-backend-staging.herokuapp.com/api/v1/users/',
              payload,
              {
                headers: {'Content-Type': 'application/json'}
              })
            .then(function (response) {
              self.message = "Utilisateur ajouté"
              self.$router.push('/users')
            })
            .catch(function (error) {
              console.log(error);
              self.message = error
              self.hasError = true

            })
        },
        getClass(){
          return  this.hasError === true ? "error-msg" : "success-msg"
        }
      }
    }
</script>

<style scoped>

</style>
