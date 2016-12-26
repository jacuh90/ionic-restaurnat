'use strict';

angular.module('conFusion')
    .controller('AboutController', AboutController);

AboutController.$inject = [
    'leadership',
    'BASE_URL'
];

function AboutController(leadership, BASE_URL) {
    var vm = this;

    vm.leadership = leadership;
    vm.BASE_URL = BASE_URL;
}