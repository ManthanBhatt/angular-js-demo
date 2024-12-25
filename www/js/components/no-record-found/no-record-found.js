angular.module('components', []).directive('noRecordFound', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: './js/components/no-record-found/no-record-found.html',
        controller: function ($scope, $attrs) {
            $scope.label = $attrs.label;
        }
    }
});