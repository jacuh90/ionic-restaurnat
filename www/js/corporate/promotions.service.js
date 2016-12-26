'use strict';

angular.module('conFusion')
    .factory('promotionService', promotionService);

promotionService.$inject = [
    '$resource',
    'BASE_URL'
];

function promotionService($resource, BASE_URL) {
    return $resource(BASE_URL+"promotions/:id", null, {'update' : {method : 'PUT'}});
}

