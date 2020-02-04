<template>
  <div class="login">
    <input type="text" v-model="modelUsername" placeholder="Nom d'utilisateur"><br>
    <input type="password" v-model="modelPassword" placeholder="Mot de passe"><br>
    <button @click="sendCredential">Envoyer</button>
    <div v-bind:class="getClass()" v-show="message!==''">
      <i class="fa fa-times-circle"></i>
        {{ message }}
    </div>
  </div>
</template>

<script>

  export default {
    template: '#login',
    name: "Login",
    data () {
      return  {
        modelUsername: "",
        modelPassword: "",
        message: "",
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
        self.hasError = false;

        this.$http
          .post('https://cyclobase-backend-staging.herokuapp.com/api/v1/users/auth',
            payload,
            {
              headers: {'Content-Type': 'application/json'}
            })
          .then(function (response) {
            self.message = "Authentification success !"
            //TODO go to next view (list User)
          })
          .catch(function (error) {
            console.log(error);
            self.message = "Error, wrong credentials"
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
  .login{
    margin: auto;
    width: 640px;
  }

</style>
