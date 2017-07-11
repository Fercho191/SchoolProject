'use strict';

/**
 * @ngdoc service
 * @name schoolProjectApp.schoolService
 * @description
 * # schoolService
 * Factory in the schoolProjectApp.
 */
angular.module('schoolProjectApp')
  .factory('schoolService', function ($http, APIDATA) {
    // Service logic
    var resourceUrl = APIDATA.HOST + '/api/schools/';

    return {
      getAll: function () {
        return $http.get(resourceUrl)
          .then(function(response) {
            return response.data;
          });
      },
      getOne: function(id) {
        return $http.get(resourceUrl + id)
          .then(function (response) {
            return response.data;
          });
      },
      create: function(data) {
        return $http.post(resourceUrl, data)
          .then(function (response) {
            return response;
          })
          .catch(function(err) {
            return err;
          });
      },
      delete: function(id) {
        return $http.delete(resourceUrl + id)
          .then(function(response) {
            return response.data;
          });
      }
    };
  });
