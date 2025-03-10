angular.module('app', [])
    .controller('app.controller', function($scope, $http) {
        $scope.nama = 'rizki';

        $http.get('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
            .then(function(response){
                $scope.dataGempaBumi = response.data;
            });
    });