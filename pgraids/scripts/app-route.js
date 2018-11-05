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
