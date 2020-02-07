<template>
  <div class="centered">
    <h5>Bienvenue sur l'interface Back office de CycloBase</h5>
    <h7>Veuillez vous identifier pour accéder aux fonctionnalités</h7>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="loginForm">
          <form v-on:submit.prevent="sendCredential">
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="Nom d'utilisateur"><br>
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="Mot de passe"><br>
            <input type="submit" class="fadeIn fourth" value="Envoyer">
          </form>

        </div>
      </div>
      <div v-bind:class="getClass()" v-show="message!==''">
        <i class="fa fa-times-circle"></i>
        {{ message }}
      </div>
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

  /* BASIC */

  html {
    background-color: #56baed;
  }

  body {
    font-family: "Poppins", sans-serif;
    height: 100vh;
  }

  a {
    color: #92badd;
    display:inline-block;
    text-decoration: none;
    font-weight: 400;
  }

  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 10px 8px;
    color: #cccccc;
  }



  /* STRUCTURE */

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
  }

  #formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 50px 30px 30px 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: center;
  }






  /* ANIMATIONS */

  /* Simple CSS3 Fade-in-down Animation */
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  /* Simple CSS3 Fade-in Animation */
  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

  .fadeIn {
    opacity:0;
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;

    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration:1s;
    -moz-animation-duration:1s;
    animation-duration:1s;
  }

  .fadeIn.first {
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  .fadeIn.second {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .fadeIn.third {
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  .fadeIn.fourth {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s;
  }

  /* Simple CSS3 Fade-in Animation */
  .underlineHover:after {
    display: block;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background-color: #56baed;
    content: "";
    transition: width 0.2s;
  }

  .underlineHover:hover {
    color: #0d0d0d;
  }

  .underlineHover:hover:after{
    width: 100%;
  }



  /* OTHERS */

  *:focus {
    outline: none;
  }

  #icon {
    width:60%;
  }


</style>
