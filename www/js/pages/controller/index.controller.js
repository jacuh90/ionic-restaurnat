'use strict';

angular.module('conFusion')
    .controller('IndexController', IndexController);

IndexController.$inject = [
    'leader',
    'featured',
    'promotion',
    'BASE_URL'
];

function IndexController(leader, featured, promotion, BASE_URL) {
    var vm = this;

    vm.BASE_URL = BASE_URL;
    vm.featured = featured;
    vm.leader = leader;
    vm.promotion = promotion;

    //promotionFactory.get({id : 0})
    //    .$promise.then(
    //    function(response) {
    //        vm.promotion = response;
    //        vm.showPromotion = true;
    //    },
    //    function(response) {
    //        vm.message = 'Error: ' + response.status + ' ' + response.statusText;
    //    }
    //);
}