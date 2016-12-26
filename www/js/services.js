//'use strict';
//
//angular.module('conFusion.services', ['ngResource'])
    //.constant("BASE_URL", "http://localhost:3000/")
    //.factory('menuFactory', ['$resource', 'BASE_URL', function($resource, BASE_URL) {
    //    return $resource(BASE_URL+"dishes/:id", null, {
    //        'update' : {
    //            method : 'PUT'
    //        }
    //    });
    //}])
    //.factory('promotionFactory', ['$resource', 'BASE_URL', function($resource, BASE_URL) {
    //    return $resource(BASE_URL+"promotions/:id", null, {'update' : {method : 'PUT'}});
    //}])
    //.service('feedbackFactory', ['$resource', 'BASE_URL', function($resource, BASE_URL) {
    //
    //    this.getFeedback = function(){
    //        return $resource(BASE_URL+"feedback/:id", null, {'update' : {method : 'PUT'}});
    //    };
    //}])
    //.service('favouriteFactory', ['$resource', 'BASE_URL', function($resource, BASE_URL) {
    //
    //    var favourites=[];
    //
    //    this.addToFavourites = function(index){
    //        var length = favourites.length;
    //
    //        for (var i = 0; i < length; i++) {
    //            if (favourites[i].id == index) {
    //                return;
    //            }
    //        }
    //        favourites.push({id: index});
    //    };
    //
    //    this.getFavourites = function() {
    //        return favourites;
    //    };
    //
    //    this.deleteFromFavourites = function(index) {
    //        var length = favourites.length;
    //
    //        for (var i = 0; i < length; i++) {
    //            if (favourites[i].id == index) {
    //                favourites.splice(i, 1);
    //            }
    //        }
    //    };
    //
    //}])
    //.factory('corporateFactory', ['$resource', 'BASE_URL', function($resource, BASE_URL) {
    //
    //    var corpfac = {};
    //
    //    corpfac.getLeaders = function() {
    //        return $resource(BASE_URL+"leadership/:id", null, {'update' : {method : 'PUT'}});
    //    };
    //
    //    return corpfac;
    //}])
    //.factory('$localStorage', ['$window', function($window) {
    //    return {
    //        store: function(key, value) {
    //            $window.localStorage[key] = value;
    //        },
    //        get: function(key, defaultValue) {
    //            return $window.localStorage[key] || defaultValue;
    //        },
    //        storeObject: function(key, value) {
    //            $window.localStorage[key] = JSON.stringify(value);
    //        },
    //        getObject: function(key,defaultValue) {
    //            return JSON.parse($window.localStorage[key] || defaultValue);
    //        }
    //    }
    //}])

//;