angular.module('app', [])
    .controller('app.controller', function($scope, $http) {

        $http.get('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
            .then(function(response){
                $scope.dataGempaBumi = response.data;
            });
    });