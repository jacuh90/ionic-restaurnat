'use strict';

angular.module('conFusion')
    .filter('favouriteFilter', favouriteFilter);

function favouriteFilter() {
    return function (dishes, favourites) {
        var out = [];
        for (var i = 0; i < favourites.length; i++) {
            for (var j = 0; j < dishes.length; j++) {
                if (dishes[j].id == favourites[i].id) {
                    out.push(dishes[j]);
                }
            }
        }
        return out;
    }
}