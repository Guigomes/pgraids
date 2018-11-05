(function() {
  "use strict";

  angular.module("app").factory("Usuario", Usuario);

  function Usuario($state) {
    var vm = this;

    vm.Usuario = {};

    function setUsuario(usuario) {
      vm.Ususario = usuario;
    }

    function getUsuario() {
      return vm.Ususario;
    }
    return {
      setUsuario: setUsuario,
      getUsuario: getUsuario
    };
  }
})();
