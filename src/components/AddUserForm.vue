<template xmlns="http://www.w3.org/1999/html">
  <div class="centered-horizontaly">
    <div class="pagetitle">Ajouter un utilisateur</div>
    <form class="addUserForm" v-on:submit.prevent="addUser">
      <input type="text" placeholder="Nom d'utilisateur *"><br>
      <input type="text" placeholder="Mot de passe *"><br>
      <input type="text" placeholder="Prénom"><br>
      <input type="text" placeholder="Nom"><br>
      <input type="text" placeholder="Adresse email"><br>
      <input type="submit"  value="Ajouter"/>
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
.addUserForm{
  width: 640px;
}
</style>
