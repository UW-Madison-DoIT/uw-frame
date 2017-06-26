'use strict';

define(['angular'], function(angular) {
  return angular.module('portal.settings.controllers', [])

  /**
   * For UW-prefixed theme names, formats the name for a more
   * attractive display in the theme selection settings box.
   */
    .filter('formatThemeNameForDisplay', function() {
      return function(input) {
        if (input) {
          if (input.indexOf('uw-') > -1) {
            var partOne = input.slice(0, 3).toUpperCase();
            var partTwo = input.slice(input.indexOf('-') + 1)
              .replace(/-/g, ' ')
              .replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase()
                  + txt.substr(1).toLowerCase();
              });
            return partOne + partTwo;
          } else {
            return input.charAt(0).toUpperCase()
              + input.substr(1).toLowerCase();
          }
        }
      };
    })

  .controller('PortalBetaSettingsController', [
    '$sessionStorage', '$scope', '$mdTheming', 'portalSkinService',
    'THEMES', 'APP_BETA_FEATURES', 'FRAME_BETA_FEATURES',
    function(
      $sessionStorage, $scope, $mdTheming, portalSkinService,
      THEMES, APP_BETA_FEATURES, FRAME_BETA_FEATURES
    ) {
    $scope.options = FRAME_BETA_FEATURES.concat(APP_BETA_FEATURES);
    $scope.$watch('portal.theme', function(newValue, oldValue) {
      if($scope.portal.theme) {
        $sessionStorage.portal.theme = $scope.portal.theme;
        $sessionStorage.portal.theme.themeVersion = THEMES.themeVersion;
        $mdTheming.generateTheme($sessionStorage.portal.theme.name, null);
        // Set browser color
        $mdTheming.setBrowserColor({
          theme: $sessionStorage.portal.theme.name,
          palette: $scope.portal.theme.name + '-primary',
          hue: '500',
        });
        if($scope.portal.theme && $scope.portal.theme.portalSkinKey) {
          portalSkinService.setPortalSkin($scope.portal.theme.portalSkinKey);
        }
      }
    });
  }])

  .controller('PortalUserSettingsController', [
    '$scope', '$q', '$window', '$localStorage', '$log', '$sessionStorage',
    'KV_KEYS', 'NOTIFICATION', 'FEATURES', 'keyValueService',
    function(
      $scope, $q, $window, $localStorage, $log, $sessionStorage,
      KV_KEYS, NOTIFICATION, FEATURES, keyValueService
    ) {
      var init = function() {
        $scope.kvEnabled = keyValueService.isKVStoreActivated();
        $scope.KV_KEYS = KV_KEYS;
        $scope.NOTIFICATION = NOTIFICATION;
        $scope.FEATURES = FEATURES;
      };

      $scope.resetAnnouncements = function() {
        delete $sessionStorage.seenAnnouncmentIds;
        delete $sessionStorage.seenPopupIds;
        if(keyValueService.isKVStoreActivated()) {
          $scope.loadingResetAnnouncements = true;
          $q.all([keyValueService.deleteValue(KV_KEYS.VIEWED_ANNOUNCEMENT_IDS),
                  keyValueService.deleteValue(KV_KEYS.VIEWED_POPUP_IDS)])
            .then(function() {
              $window.location.reload();
              $scope.loadingResetAnnouncements = false;
              return false;
            }).catch(function() {
              $log.warn('could not reset announcements');
            });
        }
      };

      $scope.resetKey = function(key, loadingKey) {
        $scope[loadingKey] = true;
        keyValueService.deleteValue(key).then(function() {
          $window.location.reload();
          $scope[loadingKey] = false;
          return false;
        }).catch(function() {
          $log.warn('could not reset key');
        });
      };

      init();
    }]);
 });
