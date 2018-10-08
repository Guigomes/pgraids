(function() {
  "use strict";

  angular.module("app").factory("Ginasios", Ginasios);

  function Ginasios() {
    return {
      getGinasios: getGinasios
    };

    function compare(a, b) {
      if (a.nome < b.nome) return -1;
      if (a.nome > b.nome) return 1;
      return 0;
    }

    function getGinasios() {
      var ginasios = [
        {
          codigo: 1,
          nome: "Academia dos Vovos",
          lat: "-15.8376886",
          long: "-48.03810184"
        },
        {
          codigo: 4,
          nome: "Skate Park",
          lat: "-15.8360609",
          long: "-48.03909886"
        },
        {
          codigo: 11,
          nome: "Esc. Gavino Reis",
          lat: "-15.83785038",
          long: "-48.480278075"
        },
        {
          codigo: 12,
          nome: "Academia Terceira Idade",
          lat: "-15.83708401",
          long: "-48.03012374"
        },
        {
          codigo: 23,
          nome: "Burning Flame",
          lat: "-15.83842966",
          long: "-48.02014786"
        },
        {
          codigo: 24,
          nome: "Ame o que faz",
          lat: "-15.83665605",
          long: "-48.02086263"
        },
        {
          codigo: 25,
          nome: "Teatro Céu Aberto",
          lat: "-15.83416518",
          long: "-48.01878544"
        },
        {
          codigo: 26,
          nome: "Ed. Estação XIV",
          lat: "-15.83530841",
          long: "-48.01854996"
        },
        {
          codigo: 27,
          nome: "Estação Arniqueiras",
          lat: "-15.83676028",
          long: "-48.01738179"
        },
        {
          codigo: 28,
          nome: "Menina e os passáros",
          lat: "-15.8353701",
          long: "-48.01673668"
        },
        {
          codigo: 29,
          nome: "Rei Cósmico",
          lat: "-15.83107586",
          long: "-48.01530726"
        },
        {
          codigo: 30,
          nome: "Fonte Vida / Vila Carioca",
          lat: "-15.8292331",
          long: "-48.01438887"
        },
        {
          codigo: 31,
          nome: "Biblioteca de Águas Claras",
          lat: "-15.8341757",
          long: "-48.01282258"
        },
        {
          codigo: 32,
          nome: "Abra as Asas",
          lat: "-15.8356633",
          long: "-48.01272173"
        },
        {
          codigo: 33,
          nome: "Administração Águas Claras",
          lat: "-15.83584381",
          long: "-48.00835717"
        },
        {
          codigo: 37,
          nome: "Mundo Estilizado",
          lat: "-15.83269998",
          long: "-48.0383533"
        }
      ];
      ginasios.sort(compare);
      return ginasios;
    }
  }
})();
