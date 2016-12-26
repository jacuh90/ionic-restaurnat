// Ionic Starter App

angular.module('conFusion')

.run(function($ionicPlatform, $rootScope, $ionicLoading, $cordovaSplashscreen, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $timeout(function(){
      $cordovaSplashscreen.hide();
    },20000);
  });

  //Handling loading date on State change
  $rootScope.$on('loading:show', function () {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner> Loading ...'
    })
  });

  $rootScope.$on('loading:hide', function () {
    $ionicLoading.hide();
  });

  $rootScope.$on('$stateChangeStart', function () {
    $rootScope.$broadcast('loading:show');
  });

  $rootScope.$on('$stateChangeSuccess', function () {
    $rootScope.$broadcast('loading:hide');
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/sidebar.html',
    controller: 'AppCtrl',
    controllerAs: 'vm'
  })
  .state('app.home', {
    url: '/home',
    views: {
      'mainContent': {
        templateUrl: 'templates/home.html',
        controller: 'IndexController',
        controllerAs: 'vm',
        resolve: {
          featured:  ['menuService', function(menuService){
            return menuService.get({id : 0});
          }],
          leader:  ['corporateService', function(corporateService){
            return corporateService.get({id : 3});
          }],
          promotion:  ['promotionService', function(promotionService){
            return promotionService.get({id : 0});
          }]
        }
      }
    }
  })
  .state('app.menu', {
    url: '/menu',
    views: {
      'mainContent': {
        templateUrl: 'templates/menu.html',
        controller: 'MenuController',
        controllerAs: 'vm',
        resolve: {
          dishes: ['menuService', function (menuService) {
            return menuService.query();
          }]
        }
      }
    }
  })
  .state('app.aboutus', {
      url: '/aboutus',
      views: {
        'mainContent': {
          templateUrl: 'templates/aboutus.html',
          controller: 'AboutController',
          controllerAs: 'vm',
          resolve: {
            leadership:  ['corporateService', function(corporateService){
              return corporateService.query();
            }]
          }
        }
      }
    })
    .state('app.favourites', {
      url: '/favourites',
      views: {
        'mainContent': {
          templateUrl: 'templates/favorites.html',
          controller: 'FavouriteController',
          controllerAs: 'vm',
          resolve: {
            dishes:  ['menuService', function(menuService){
              return menuService.query();
            }],
            favourites: ['favouriteService', function(favouriteService) {
              return favouriteService.getFavourites();
            }]
          }
        }
      }
    })
  .state('app.dishdetails', {
    url: '/menu/:id',
    views: {
      'mainContent': {
        templateUrl: 'templates/dishdetail.html',
        controller: 'DishDetailController',
        controllerAs: 'vm',
        resolve: {
          dish: ['$stateParams','menuService', function($stateParams, menuService){
            return menuService.get({id:parseInt($stateParams.id, 10)});
          }]
        }
      }
    }
  })
  .state('app.contactus', {
    url: '/contactus',
    views: {
      'mainContent': {
        templateUrl: 'templates/contactus.html'
        // controller: 'ContactController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
