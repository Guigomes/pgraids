(function() {
  "use strict";

  angular.module("app").factory("Authentication", Authentication);

  function Authentication($state, Usuario) {
    var vm = this;

    function setPromptEvent(promptEvent) {
      vm.promptEvent = promptEvent;
    }

    function getPromptEvent() {
      return vm.promptEvent;
    }
    function inicializar() {
      // FirebaseUI config.
      firebase.auth().onAuthStateChanged(
        function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;

            user.getIdToken().then(function(accessToken) {
              console.log("USER", user);
              console.log("accessToken", accessToken);

              Usuario.setUsuario(user);
              $state.go("logado");
            });
          } else {
            var uiConfig = {
              signInSuccessUrl: "/#!/logado",
              signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
              ],
              // tosUrl and privacyPolicyUrl accept either url string or a callback
              // function.
              // Terms of service url/callback.
              tosUrl: "<your-tos-url>",
              // Privacy policy url/callback.
              privacyPolicyUrl: function() {
                window.location.assign("<your-privacy-policy-url>");
              }
            };
            // Initialize the FirebaseUI Widget using Firebase.
            vm.ui = new firebaseui.auth.AuthUI(firebase.auth());
            // The start method will wait until the DOM is loaded.
            vm.ui.start("#firebaseui-auth-container", uiConfig);
            console.log("Deslogado");
          }
        },
        function(error) {
          console.log(error);
        }
      );
    }

    function logout() {
      vm.ui.delete();
    }
    return {
      inicializar: inicializar,
      logout: logout,
      setPromptEvent: setPromptEvent,
      getPromptEvent: getPromptEvent
    };
  }
})();
