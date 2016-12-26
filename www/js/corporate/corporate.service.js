'use strict';

angular.module('conFusion')
    .factory('corporateService', corporateService);

corporateService.$inject = [
    '$resource',
    'BASE_URL'
];

function corporateService($resource, BASE_URL) {
    return $resource(BASE_URL+"leadership/:id", null, {'update' : {method : 'PUT'}});
}