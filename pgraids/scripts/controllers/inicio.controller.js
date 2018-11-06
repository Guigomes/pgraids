angular.module("app").controller("InicioController", InicioController);

function InicioController(Authentication, $rootScope, $scope) {
  var vm = this;
  vm.mostrarInstalar = false;

  $rootScope.$on("available", function() {
    vm.mostrarInstalar = true;
    $rootScope.$apply();
  });
  Authentication.inicializar();
  vm.instalar = function() {
    Authentication.instalar();
  };
}
