initApp = function() {
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
        });
      } else {
        // User is signed out.

        console.log("Deslogado");
      }
    },
    function(error) {
      console.log(error);
    }
  );
};

window.addEventListener("load", function() {
  initApp();

  /*
  firebase
    .auth()
    .signOut()
    .then(
      function() {
        console.log("logout");
      },
      function(error) {
        console.log("logout error");
      }
    );*/
});
