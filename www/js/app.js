// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
  .state('app.header', {
    url: '/header',
    abstract: true,
    views: {
        'menuContent': {
          templateUrl: 'templates/01_header.html',
          controller: 'TabsCtrl'
        }
      }
  })
  .state('app.header.stable',{
    url: '/stable',
    views: {
      'stable' : {
        templateUrl: 'templates/01_header/01_stable.html'
      }
    }
  })
  .state('app.header.positive',{
    url: '/positive',
    views: {
      'positive' : {
        templateUrl: 'templates/01_header/02_positive.html'
      }
    }
  })
  .state('app.header.calm',{
    url: '/calm',
    views: {
      'calm' : {
        templateUrl: 'templates/01_header/03_calm.html'
      }
    }
  })
  .state('app.header.balanced',{
    url: '/balanced',
    views: {
      'balanced' : {
        templateUrl: 'templates/01_header/04_balanced.html'
      }
    }
  })
  .state('app.header.energized',{
    url: '/energized',
    views: {
      'energized' : {
        templateUrl: 'templates/01_header/05_energized.html'
      }
    }
  })
  .state('app.header.assertive',{
    url: '/assertive',
    views: {
      'assertive' : {
        templateUrl: 'templates/01_header/06_assertive.html'
      }
    }
  })
  .state('app.header.royal',{
    url: '/royal',
    views: {
      'royal' : {
        templateUrl: 'templates/01_header/07_royal.html'
      }
    }
  })
  .state('app.header.dark',{
    url: '/dark',
    views: {
      'dark' : {
        templateUrl: 'templates/01_header/08_dark.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.tabs', {
      url: '/tabs',
      abstract: true,
      views: {
        'menuContent': {
          templateUrl: 'templates/05_tabs.html',
          controller: 'TabsCtrl'
        }
      }
    })
    
  .state('app.tabs.tab1',{
    url: '/tab1',
    views: {
      'tab1' : {
        templateUrl: 'templates/05_tabs/tabs_tab1.html'
      }
    }
  })
  
 .state('app.tabs.deep', {
    url: "/deep",
    views: {
      'tab1': {
        templateUrl: "templates/deep.html"
      }
    }
  })
  
  .state('app.tabs.tab2',{
    url: '/tab2',
    views: {
      'tab2' : {
        templateUrl: 'templates/05_tabs/tabs_tab2.html'
      }
    }
  })
  
  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
