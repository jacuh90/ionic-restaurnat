'use strict';

angular.module('conFusion')
    .factory('menuService', menuService);

menuService.$inject = [
    '$resource',
    'BASE_URL'
];

function menuService($resource, BASE_URL) {
    return $resource(BASE_URL + "dishes/:id", null, {
        'update' : {
            method : 'PUT'
        }
    });
}