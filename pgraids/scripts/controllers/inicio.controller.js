angular.module("app").controller("InicioController", InicioController);

function InicioController(Authentication) {
  Authentication.inicializar();
}
