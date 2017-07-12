'use strict';

/**
 * @ngdoc service
 * @name schoolProjectApp.activityservice
 * @description
 * # activityservice
 * Factory in the schoolProjectApp.
 */
angular.module('schoolProjectApp')
  .factory('activityservice', function ($http, APIDATA) {
    // Service logic
    var resourceUrl = APIDATA.HOST + '/api/activities/';

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
      update: function(id, data) {
        return $http.put(resourceUrl + id + '/', data)
          .then(function(response) {
            return response;
          })
          .catch(function(err) {
            return err
          })
      },
      delete: function(id) {
        return $http.delete(resourceUrl + id)
          .then(function(response) {
            return response.data;
          });
      }
    };
  });
