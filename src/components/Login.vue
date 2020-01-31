<template>
  <div class="login">
    <input type="text" v-model="modelUsername"><br>
    <input type="password" v-model="modelPassword"><br>
    <button @click="sendCredential">Envoyer</button>
    <div class="error-msg" v-show="hasError">
      <i class="fa fa-times-circle"></i>
        Erreur de combinaison Utilisateur/mot de passe
    </div>
  </div>
</template>

<script>

  export default {
    template: '#login',
    name: "Login",
    data () {
      return  {
        modelUsername: "Nom d'utilisateur",
        modelPassword: "Mot de passe",
        hasError: false
      }
    },
    methods: {
      sendCredential : function () {

        var payload = {
          userName: this.modelUsername,
          password: this.modelPassword
        };

        var self = this;
        self.hasError = false

        this.$http
          .post('https://cyclobase-backend-staging.herokuapp.com/api/v1/users/auth',
            payload,
            {
              headers: {'Content-Type': 'application/json'}
            })
          .then(function (response) {
            this.message =response
            //TODO go to next view (list User)
          })
          .catch(function (error) {
            console.log(error);
            self.hasError = true
          })
      },
    }
  }
</script>

<style scoped>
  .login{
    margin: auto;
    width: 640px;
  }

</style>
