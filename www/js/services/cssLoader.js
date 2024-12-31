angular.module('teamManager.loader', [])
    .service('cssLoader', function ($q, $document) {
        var loadedCSS = new Set();
        this.load = function (cssUrl) {
            var deferred = $q.defer();
            if (loadedCSS.has(cssUrl)) {
                deferred.resolve(); 
            } else {
                loadedCSS.add(cssUrl);
                var link = angular.element('<link rel="stylesheet" href="' + cssUrl + '" type="text/css">');
                $document.find('head').append(link);

                link.on('load', function () {
                    deferred.resolve();
                });

                link.on('error', function () {
                    deferred.reject('Error loading CSS file: ' + cssUrl);
                });
            }

            return deferred.promise;
        };
    });
