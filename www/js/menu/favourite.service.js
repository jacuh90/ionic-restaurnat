'use strict';

angular.module('conFusion')
    .factory('favouriteService', favouriteService);

favouriteService.$inject = [
    '$localStorage'
];

function favouriteService($localStorage) {
    var favourites = $localStorage.getObject('favourites', '[]');

    return {
        addToFavourites: function(index){
            var length = favourites.length;

            for (var i = 0; i < length; i++) {
                if (favourites[i].id == index) {
                    return;
                }
            }
            favourites.push({id: index});
            $localStorage.storeObject('favourites', favourites);
        },
        getFavourites: function() {
            return favourites;
        },
        deleteFromFavourites: function(index) {
            var length = favourites.length;

            for (var i = 0; i < length; i++) {
                if (favourites[i].id == index) {
                    favourites.splice(i, 1);
                }
            }

            $localStorage.storeObject('favourites', favourites);
        }
    }
}