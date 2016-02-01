'use strict';
define([], function() {
  return {

    baseUrl: require.toUrl('.'),

    packages: [
        'portal',
        'my-app'
    ],

    paths: {
        'angular'       : "bower_components/angular/angular.min",
        'angular-mocks' : "bower_components/angular-mocks/angular-mocks",
        'angulartics'   : "bower_components/angulartics/dist/angulartics.min",
        'angulartics-google-analytics' : "bower_components/angulartics-google-analytics/dist/angulartics-google-analytics.min",
        'app-config'    : "js/app-config",
        'frame-config'  : "js/frame-config",
        'override'      : "js/override",
        'jquery'        : "bower_components/jquery/dist/jquery.min",
        'jquery-ui'     : "bower_components/jquery-ui/jquery-ui.min",
        'ngRoute'       : "bower_components/angular-route/angular-route.min",
        'ngSanitize'    : "bower_components/angular-sanitize/angular-sanitize.min",
        'ngStorage'     : "bower_components/ngstorage/ngStorage.min",
        'sortable'      : "js/sortable",
        'ui-bootstrap'  : "bower_components/angular-bootstrap/ui-bootstrap-tpls.min",
        'ui-gravatar'   : "bower_components/angular-gravatar/build/angular-gravatar.min",
        'ngAria'        : "bower_components/angular-aria/angular-aria.min",
        // Use ui-bootstrap instead of bootstrap or uw-ui-toolkit.  See https://angular-ui.github.io/bootstrap/
        //'uw-ui-toolkit' : "bower_components/uw-ui-toolkit/dist/js/uw-ui-toolkit.min"
    },

    shim: {
        'angular'       : { deps: ['jquery'], exports: 'angular' },
        'angular-mocks' : { deps: ['angular'] },
        'angulartics'   : { deps: ['angular'], exports: 'angulartics' },
        'angulartics-google-analytics' : { deps: ['angulartics'] },
        'ngRoute'       : { deps: ['angular'] },
        'ngSanitize'    : { deps: ['angular'] },
        'ngStorage'     : { deps: ['angular'] },
        'ngAria'        : { deps: ['angular'] },
        'ui-bootstrap'  : { deps: ['angular'] },
        'ui-gravatar'   : { deps: ['angular'] },
        'uw-ui-toolkit' : { deps: ['jquery'] }
    },

    waitSeconds : 0

  }
});
