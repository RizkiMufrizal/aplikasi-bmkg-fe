angular.module("app", []).controller("app.controller", function ($scope, $http) {
    $http.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json").then(function (response) {
        $scope.dataGempaBumi = response.data;
    });

    $http
        .get("https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=11.07.09.2009")
        .then(function (response) {
            $scope.dataCuaca = response.data.data[0].cuaca[0];

            console.log($scope.dataCuaca);
        });
});
