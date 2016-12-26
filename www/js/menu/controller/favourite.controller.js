'use strict';

angular.module('conFusion')
    .controller('FavouriteController', FavouriteController);

FavouriteController.$inject = [
    'dishes',
    'favourites',
    'favouriteService',
    '$ionicPopup',
    '$cordovaVibration',
    'BASE_URL'
];

function FavouriteController(dishes, favourites, favouriteService, $ionicPopup, $cordovaVibration, BASE_URL) {
    var vm = this;

    vm.BASE_URL = BASE_URL;
    vm.shouldShowDelete = false;

    vm.favourites = favourites;
    vm.dishes = dishes;

    //Public functions
    vm.toggleDelete = toggleDelete;
    vm.deleteFavourite = deleteFavourite;


    function toggleDelete() {
        vm.shouldShowDelete = !vm.shouldShowDelete;
    }

    function deleteFavourite(index) {
        var confirmPopup = $ionicPopup.confirm({
            title : 'Confirm Delete',
            template : 'Are you sure you want to delete this item'
        });

        confirmPopup.then(function(res) {
            if (res) {
                favouriteService.deleteFromFavourites(index);
                vm.shouldShowDelete = false;
                $cordovaVibration.vibrate(500);
            }
        });
    }
}