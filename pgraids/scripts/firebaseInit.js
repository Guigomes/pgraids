var config = {
  apiKey: "AIzaSyAeeenz2zCMzr5hXYM-VLMMSyPaNTsofl0",
  authDomain: "pgraids.firebaseapp.com",
  databaseURL: "https://pgraids.firebaseio.com",
  projectId: "pgraids",
  storageBucket: "pgraids.appspot.com",
  messagingSenderId: "976467573499"
};
firebase.initializeApp(config);

if (navigator.serviceWorker.controller) {
  console.log("[PWA Builder] active service worker found, no need to register");
} else {
  //Register the ServiceWorker
  navigator.serviceWorker
    .register("/serviceworker.js", {
      scope: "./"
    })
    .then(function(reg) {
      console.log("Service worker has been registered for scope:" + reg.scope);
    });
}
/*
// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: "<url-to-redirect-to-on-success>",
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
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);
*/
