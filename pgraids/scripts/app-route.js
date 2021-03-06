angular
  .module("app")
  .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $mdThemingProvider
      .theme("default")
      .primaryPalette("red")
      .accentPalette("blue");

    $stateProvider
      .state("/", {
        url: "/",
        name: "/",
        views: {
          viewContent: {
            controller: "InicioController",
            controllerAs: "vm",
            templateUrl: "./pages/inicio.html"
          }
        }
      })
      .state("logado", {
        url: "/logado",
        name: "logado",
        views: {
          viewContent: {
            controller: "PrincipalController",
            controllerAs: "vm",
            templateUrl: "/pages/principal.html"
          }
        }
      });

    $urlRouterProvider.otherwise("/");
  });

angular.module("app").run(run);

function run($window, $rootScope, Authentication) {
  const beforeinstallprompt = function(e) {
    promptEvent = e;
    promptEvent.preventDefault();
    $rootScope.$broadcast("available");

    console.log("before4");
    Authentication.setPromptEvent(promptEvent);
    ga("send", "event", "install", "available");

    return false;
  };

  const installed = function(e) {
    Authentication.setPromptEvent(null);

    // This fires after onbeforinstallprompt OR after manual add to homescreen.
    ga("send", "event", "install", "installed");
  };

  $window.addEventListener("beforeinstallprompt", beforeinstallprompt);
  $window.addEventListener("appinstalled", installed);
}
