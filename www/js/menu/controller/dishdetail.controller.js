'use strict';

angular.module('conFusion')
    .controller('DishDetailController', DishDetailController);

DishDetailController.$inject = [
    '$scope',
    'dish',
    'menuService',
    'favouriteService',
    '$ionicPopover',
    '$ionicModal',
    '$ionicPlatform',
    '$cordovaLocalNotification',
    '$cordovaToast',
    '$timeout',
    'BASE_URL'
];

function DishDetailController($scope, dish, menuService, favouriteService, $ionicPopover, $ionicModal, $ionicPlatform, $cordovaLocalNotification, $cordovaToast, $timeout, BASE_URL) {
    var vm = this;

    vm.BASE_URL = BASE_URL;
    vm.showDish = false;
    vm.message = 'Loading...';
    vm.comment = {};
    vm.dish = dish;

    //Public Functions
    vm.showOptions = showOptions;
    vm.hideOptions = hideOptions;
    vm.addFavourite = addFavourite;
    vm.addComment = addComment;
    vm.closeComment = closeComment;
    vm.doComment = doComment;

    $ionicPopover.fromTemplateUrl('templates/dish-detail-popover.html', {
        scope: $scope
    }).then(function(popover) {
        vm.popover = popover;
    });

    function showOptions($event) {
        vm.popover.show($event);
    }
    function hideOptions() {
        vm.popover.hide();
    }

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        vm.popover.remove();
    });

    function addFavourite(index) {
        console.log('Dish ' + index + ' added!');
        favouriteService.addToFavourites(index);

        $ionicPlatform.ready(function () {
            $cordovaLocalNotification.schedule({
                id: 1,
                title: "Added Favorite",
                text: vm.dish.name
            }).then(function () {
                    console.log('Added Favorite ' + vm.dish.name);
                },
                function () {
                    console.log('Failed to add Notification ');
                });

            $cordovaToast
                .show('Added Favorite ' + vm.dish.name, 'long', 'bottom')
                .then(function (success) {
                    // success
                }, function (error) {
                    // error
                });
        });

        $timeout(function() {
            hideOptions();
        }, 1000);
    }

    $ionicModal.fromTemplateUrl('templates/comment.html', {
        scope: $scope
    }).then(function(modal) {
        vm.modalComment = modal;
    });

    function addComment() {
        vm.modalComment.show();
    }

    function closeComment() {
        vm.modalComment.hide();
    }

    function doComment() {
        console.log('Adding Comment', vm.comment);
        $timeout(function() {
            vm.comment.date = new Date().toISOString();
            menuService.update({id:vm.dish.id}, vm.dish);
            vm.dish.comments.push(vm.comment);
            vm.hideOptions();
            vm.closeComment();
        }, 1000);
    }
}