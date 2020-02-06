<template>
  <div class="login">
    <form v-on:submit.prevent="sendCredential">
      <input type="text" placeholder="Nom d'utilisateur"><br>
      <input type="password" placeholder="Mot de passe"><br>
      <button type="submit" >Envoyer</button>
    </form>
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
    data : function () {
      return  {
        message: "",
        hasError: false
      }
    },
    methods: {
      sendCredential : function (event) {

        var payload = {
          userName: event.target[0].value,
          password: event.target[1].value
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
            console.log( "Authentification success !");
            self.$store.dispatch('login',this);
            //TODO push to dashboard
            self.$router.push('/users')
          })
          .catch(function (error) {
            console.log(error);
            self.message = "Error, wrong credentials";
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
