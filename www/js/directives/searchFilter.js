angular.module('teamManager.directives', [])
  .directive('searchFilter', function () {
    return {
      restrict: 'E',
      scope: {
        items: '=',        // Items to search/filter
        searchQuery: '=',  // Search query binding
        filterProperty: '@' // Property to filter by
      },
      template: `
        <ion-searchbar
          ng-model="searchQuery"
          placeholder="Search"
          class="searchbar"
          debounce="500"
          show-clear-button="true">
        </ion-searchbar>
        <ion-list>
          <ion-item ng-repeat="item in items | filter: searchQueryFilter" ng-show="items.length > 0">
            <h2>{{item[filterProperty]}}</h2>
            <p ng-if="item.position">{{item.position}}</p>
            <p ng-if="item.coach">{{item.coach}}</p>
            <p ng-if="item.team">{{item.team}}</p>
          </ion-item>
        </ion-list>
      `,
      controller: function ($scope) {
        // Filter logic that is applied when search query changes
        $scope.searchQueryFilter = function (item) {
          var searchQuery = $scope.searchQuery ? $scope.searchQuery.toLowerCase() : '';
          
          // Ensure the filterProperty is dynamic to work for both players and teams
          if ($scope.filterProperty === 'name') {
            return item.name.toLowerCase().indexOf(searchQuery) !== -1;
          } else if ($scope.filterProperty === 'team') {
            return item.team && item.team.toLowerCase().indexOf(searchQuery) !== -1;
          } else if ($scope.filterProperty === 'position') {
            return item.position && item.position.toLowerCase().indexOf(searchQuery) !== -1;
          } else if ($scope.filterProperty === 'coach') {
            return item.coach && item.coach.toLowerCase().indexOf(searchQuery) !== -1;
          } else {
            return false;
          }
        };
      }
    };
  });
