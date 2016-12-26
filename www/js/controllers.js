angular.module('conFusion.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = $localStorage.getObject('userinfo','{}');
  $scope.reservation = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/reserve.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalReserve = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.closeReserve = function() {
    $scope.modalReserve.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.reserve = function() {
      $scope.modalReserve.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $localStorage.storeObject('userinfo',$scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.doReserve = function() {
    console.log('Doing reservation', $scope.reservation);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeReserve();
    }, 1000);
  };
})
  //.controller('FavouriteController', ['$scope', '$timeout', 'dishes', 'favourites', 'favouriteFactory', '$ionicListDelegate', '$ionicPopup', 'BASE_URL', function($scope, $timeout, dishes, favourites, favouriteFactory, $ionicListDelegate, $ionicPopup, BASE_URL) {
  //  $scope.BASE_URL = BASE_URL;
  //  $scope.shouldShowDelete = false;
  //
  //  $scope.favourites = favourites;
  //  $scope.dishes = dishes;
  //
  //  $scope.toggleDelete = function() {
  //      $scope.shouldShowDelete = !$scope.shouldShowDelete;
  //  };
  //
  //  $scope.deleteFavourite = function(index) {
  //      var confirmPopup = $ionicPopup.confirm({
  //          title : 'Confirm Delete',
  //          template : 'Are you sure you want to delete this item'
  //      });
  //
  //      confirmPopup.then(function(res) {
  //          if (res) {
  //              favouriteFactory.deleteFromFavourites(index);
  //              $scope.shouldShowDelete = false;
  //          }
  //      })
  //
  //  }
  //}])
  //.controller('ContactController', ['$scope', function($scope) {
  //  $scope.feedback = {
  //    mychannel:"",
  //    firstName:"",
  //    lastName:"",
  //    agree:false,
  //    email:""
  //  };
  //
  //  var channels = [
  //    { value : 'tel', label: 'Tel.' },
  //    { value : 'Email', label: 'Email' }
  //  ];
  //
  //  $scope.channels = channels;
  //  $scope.invalidChannelSelection = false;
  //}])
  //.controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, Feedback) {
  //  $scope.sendFeedback = function() {
  //    console.log($scope.feedback);
  //    if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
  //      $scope.invalidChannelSelection = true;
  //      console.log('incorrect');
  //    }
  //    else {
  //      $scope.invalidChannelSelection = false;
  //
  //      Feedback.getFeedback().save($scope.feedback, function() {
  //
  //      });
  //
  //      $scope.feedback = {mychannel:"", firstName:"", lastName:"",
  //        agree:false, email:"" };
  //      $scope.feedback.mychannel="";
  //
  //      $scope.feedbackForm.$setPristine();
  //      console.log($scope.feedback);
  //    }
  //  };
  //}])
  //.controller('DishDetailController', ['$scope', 'dish', '$stateParams', 'menuFactory', 'favouriteFactory', '$ionicPopover', '$ionicModal', '$timeout', 'BASE_URL',  function($scope, dish, $stateParams, menuFactory, favouriteFactory, $ionicPopover, $ionicModal, $timeout, BASE_URL) {
  //  $scope.BASE_URL = BASE_URL;
  //  $scope.showDish = false;
  //  $scope.message = 'Loading...';
  //
  //
  //  menuFactory.get({id : parseInt($stateParams.id, 10)})
  //      .$promise.then(
  //      function(response) {
  //        $scope.dish = response;
  //        $scope.showDish = true;
  //      },
  //      function(response) {
  //        $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
  //      }
  //  );
  //
  //  $ionicPopover.fromTemplateUrl('templates/dish-detail-popover.html', {
  //      scope: $scope
  //  }).then(function(popover) {
  //      $scope.popover = popover;
  //  });
  //
  //  $scope.showOptions = function($event) {
  //      $scope.popover.show($event);
  //  };
  //  $scope.hideOptions = function() {
  //      $scope.popover.hide();
  //  };
  //  //Cleanup the popover when we're done with it!
  //  $scope.$on('$destroy', function() {
  //      $scope.popover.remove();
  //  });
  //
  //  $scope.addFavourite = function(index) {
  //      console.log('Dish ' + index + ' added!');
  //      favouriteFactory.addToFavourites(index);
  //  };
  //  $ionicModal.fromTemplateUrl('templates/comment.html', {
  //    scope: $scope
  //  }).then(function(modal) {
  //    $scope.modalComment = modal;
  //  });
  //
  //  $scope.addComment = function() {
  //      $scope.modalComment.show();
  //  };
  //
  //  $scope.comment = {};
  //  $scope.closeComment = function() {
  //      $scope.modalComment.hide();
  //  };
  //
  //
  //  $scope.doComment = function() {
  //    console.log('Adding Comment', $scope.comment);
  //    $timeout(function() {
  //        $scope.comment.date = new Date().toISOString();
  //        menuFactory.update({id:$scope.dish.id}, $scope.dish);
  //        $scope.dish.comments.push($scope.comment);
  //        $scope.hideOptions();
  //        $scope.closeComment();
  //    }, 1000);
  //  };
  //
  //}])
  //.controller('IndexController', ['$scope', 'corporateFactory', 'menuFactory', 'promotionFactory', 'BASE_URL', function($scope, corporateFactory, menuFactory, promotionFactory, BASE_URL) {
  //  $scope.BASE_URL = BASE_URL;
  //  $scope.showDish = false;
  //  $scope.showPromotion = false;
  //  $scope.showLeader = false;
  //  $scope.message = 'Loading...';
  //  corporateFactory.getLeaders().get({id : 3})
  //      .$promise.then(
  //      function(response) {
  //        $scope.leader = response;
  //        $scope.showLeader = true;
  //      },
  //      function(response) {
  //        $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
  //      }
  //  );
  //  menuFactory.get({id : 0})
  //      .$promise.then(
  //      function(response) {
  //        $scope.featured = response;
  //        $scope.showDish = true;
  //      },
  //      function(response) {
  //        $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
  //      }
  //  );
  //  promotionFactory.get({id : 0})
  //      .$promise.then(
  //      function(response) {
  //        $scope.promotion = response;
  //        $scope.showPromotion = true;
  //      },
  //      function(response) {
  //        $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
  //      }
  //  );
  //
  //}])
  //.controller('AboutController', ['$scope', 'corporateFactory', 'BASE_URL', function($scope, corporateFactory, BASE_URL) {
  //    $scope.BASE_URL = BASE_URL;
  //    $scope.showLeaders = false;
  //
  //    corporateFactory.getLeaders().query(
  //        function(response) {
  //          $scope.leadership = response;
  //          $scope.showLeaders = true;
  //        },
  //        function(response) {
  //          $scope.message = 'Error: ' + response.status + ' ' + response.statusText;
  //        }
  //    );
  //  }]);
