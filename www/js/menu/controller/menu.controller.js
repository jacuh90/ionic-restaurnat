'use strict';

angular.module('conFusion')
    .controller('MenuController', MenuController);

MenuController.$inject = [
    'dishes',
    'favouriteService',
    '$ionicListDelegate',
    '$ionicPlatform',
    '$cordovaLocalNotification',
    '$cordovaToast',
    'BASE_URL'
];

function MenuController(dishes, favouriteService, $ionicListDelegate, $ionicPlatform, $cordovaLocalNotification, $cordovaToast, BASE_URL) {
    var vm = this;

    vm.BASE_URL = BASE_URL;
    vm.tab = 1;
    vm.filtText = '';
    vm.dishes = dishes;

    //Public functions
    vm.select = select;
    vm.isSelected = isSelected;
    vm.toggleDetails = toggleDetails;
    vm.addFavourite = addFavourite;

    function select(setTab) {
        vm.tab = setTab;

        switch (setTab) {
            case 2:
                vm.filtText = "appetizer";
                break;
            case 3:
                vm.filtText = "mains";
                break;
            case 4:
                vm.filtText = "dessert";
                break;
            default :
                vm.filtText = "";
        }
    }

    function isSelected(checkTab) {
        return (vm.tab === checkTab);
    }

    function toggleDetails() {
        vm.showDetails = !vm.showDetails;
    }

    function addFavourite(index) {
        favouriteService.addToFavourites(index);
        $ionicListDelegate.closeOptionButtons();

        $ionicPlatform.ready(function () {
            $cordovaLocalNotification.schedule({
                id: 1,
                title: "Added Favorite",
                text: vm.dishes[index].name
            }).then(function () {
                    console.log('Added Favorite ' + vm.dishes[index].name);
                },
                function () {
                    console.log('Failed to add Notification ');
                });

            $cordovaToast
                .show('Added Favorite ' + vm.dishes[index].name, 'long', 'center')
                .then(function (success) {
                    // success
                }, function (error) {
                    // error
                });
        });
    }
}
