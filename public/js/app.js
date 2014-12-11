'use strict';

var app = angular.module('app', []);

app.constant('API_URL', 'http://localhost:3000');

app.controller('MainController', ['RandomPersonService',
    function(RandomPersonService, UserService) {

        var scope = this;
        scope.message = "Response will be displayed here";
        scope.getRandomPerson = getRandomPerson;


        function getRandomPerson() {
            console.log('getRandomPerson()');
            RandomPersonService.getPerson()
                .then(function success(response) {
                    scope.randomPerson = response.data;
                    if (response) {
                        scope.message = "Success response (1): " + JSON.stringify(response);
                    } else {
                        scope.message = "Success response (1): No response";
                    }
                    return response; // if we don't return this the second then will not get a response
                }, function failure(response) {
                    if (response) {
                        scope.message = "Error response (1): " + JSON.stringify(response);
                    } else {
                        scope.message = "Error response (1): No response";
                    }
                })
                .then(function success(response) {
                    if (response)
                        if (response) {
                            scope.message = "Success response (2): " + JSON.stringify(response);
                        } else {
                            scope.message = "Success response (2): No response";
                        }
                }, function failure(response) {
                    // will not be called since the error is already handled in the previous promise
                    if (response) {
                        scope.message = "Error response (2): " + JSON.stringify(response);
                    } else {
                        scope.message = "Error response (2): No response";
                    }
                });
        };

    }
]);

app.factory('RandomPersonService', ['$http', 'API_URL',
    function($http, API_URL) {
        return {
            getPerson: getPerson
        };

        function getPerson() {
            return $http.get(API_URL + '/random-person2');
        }
    }
]);
