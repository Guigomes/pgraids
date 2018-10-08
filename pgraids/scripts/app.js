// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function () {
   "use strict";

   angular.module("app", ['ngMaterial', 'ngAnimate']);

   angular.module("app").config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
         .primaryPalette('red')
         .accentPalette('blue');
   });

   angular.module("app").controller("LocationController", LocationController);

   function LocationController(Ginasios, $mdToast) {
      var vm = this;
      vm.go = go;

      try {
         vm.locais = Ginasios.getGinasios();

         vm.localSelecionado = vm.locais[0];
      } catch (err) {
         alert(err);
      }
      function go() {

         if (vm.codigoLocal !== undefined && vm.codigoLocal > 0) {

            vm.localSelecionado = vm.locais.find(item => item.codigo == vm.codigoLocal);

         }

         if (vm.localSelecionado !== undefined) {

            mapsSelector(vm.localSelecionado.lat, vm.localSelecionado.long, vm.localSelecionado.nome);
         } else {
            $mdToast.show(
               $mdToast.simple()
                  .textContent('Não foi encontrao um ginásio com o código ' + vm.codigoLocal)
                  .position('bottom')
                  .hideDelay(3000));
         }
      }

      function mapsSelector(lat, long, nome) {
         if (
            /* if we're on iOS, open in Apple Maps */
            navigator.platform.indexOf("iPhone") != -1 ||
            navigator.platform.indexOf("iPod") != -1 ||
            navigator.platform.indexOf("iPad") != -1
         )
            window.open(
               "maps://maps.google.com/maps?daddr=" +
               lat +
               ", + " +
               long +
               "&amp;ll="
            );
      /* else use Google */ else
            /*
              window.open(
                "https://maps.google.com/maps?daddr=" +
                  lat +
                  ", + " +
                  long +
                  "&amp;ll="
              );
              */
            window.open(
               "https://maps.google.com/maps?q=" + lat + ", + " + long + "(" + nome + ")&amp;ll="
            );

      }
   }
})();
