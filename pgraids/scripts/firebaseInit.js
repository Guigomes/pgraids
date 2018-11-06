var config = {
  apiKey: "AIzaSyAeeenz2zCMzr5hXYM-VLMMSyPaNTsofl0",
  authDomain: "pgraids.firebaseapp.com",
  databaseURL: "https://pgraids.firebaseio.com",
  projectId: "pgraids",
  storageBucket: "pgraids.appspot.com",
  messagingSenderId: "976467573499"
};
firebase.initializeApp(config);
var database = firebase.database();

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
