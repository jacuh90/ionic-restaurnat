'use strict';

angular.module('conFusion')
    .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = [
    '$scope',
    '$ionicModal',
    '$ionicPlatform',
    '$cordovaCamera',
    '$timeout',
    '$localStorage'
];

function AppCtrl($scope, $ionicModal, $ionicPlatform, $cordovaCamera, $timeout, $localStorage) {
    var vm = this;
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    vm.loginData = $localStorage.getObject('userinfo','{}');
    vm.reservation = {};
    vm.registration = {};

    vm.closeLogin = closeLogin;
    vm.closeReserve = closeReserve;
    vm.closeRegister = closeRegister;
    vm.login = login;
    vm.reserve = reserve;
    vm.register = register;
    vm.doLogin = doLogin;
    vm.doReserve = doReserve;
    vm.doRegister = doRegister;

    init();

    function init() {
        $ionicPlatform.ready(function() {
            var options = {};
            vm.takePicture = function() {
                options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
                $cordovaCamera.getPicture(options).then(function(imageData) {
                    vm.registration.imgSrc = "data:image/jpeg;base64," + imageData;
                    console.log(vm.registration.imgSrc);
                }, function(err) {
                    console.log(err);
                });

                vm.registerform.show();
            };
            vm.choosePicture = function() {
                options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function(imageData) {
                    vm.registration.imgSrc = "data:image/jpeg;base64," + imageData;
                    console.log(vm.registration.imgSrc);
                }, function(err) {
                    console.log(err);
                });

                vm.registerform.show();
            };
        });
    }

    $ionicModal.fromTemplateUrl('templates/modals/login.html', {
        scope: $scope
    }).then(function(modal) {
        vm.modal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modals/reserve.html', {
        scope: $scope
    }).then(function(modal) {
        vm.modalReserve = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modals/register.html', {
        scope: $scope
    }).then(function (modal) {
        vm.registerform = modal;
    });

    function closeRegister() {
        vm.registerform.hide();
    }

    function register() {
        vm.registerform.show();
    }

    function closeLogin() {
        vm.modal.hide();
    }

    function closeReserve() {
        vm.modalReserve.hide();
    }

    function login() {
        vm.modal.show();
    }

    function reserve() {
        vm.modalReserve.show();
    }

    // Perform the login action when the user submits the login form
    function doLogin() {
        console.log('Doing login', vm.loginData);
        $localStorage.storeObject('userinfo',vm.loginData);

        $timeout(function() {
            vm.closeLogin();
        }, 1000);
    }

    function doReserve() {
        console.log('Doing reservation', vm.reservation);

        $timeout(function() {
            vm.closeReserve();
        }, 1000);
    }

    function doRegister() {
        console.log('Doing registration', vm.reservation);

        $timeout(function () {
            vm.closeRegister();
        }, 1000);
    }
}