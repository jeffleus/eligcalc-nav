// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

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

    .state('app.artists', {
      url: '/artists',
      views: {
        'menuContent': {
          	templateUrl: 'app/straight/artists.html',
          	controller: 'ArtistsCtrl'
        }
      }
    })

    .state('app.artist', {
      url: '/artist/:artistid',
      views: {
        'menuContent': {
          	templateUrl: 'app/straight/artist.html',
          	controller: 'ArtistCtrl'
        }
      }
    })

    .state('app.album', {
      url: '/album/:albumid',
      views: {
        'menuContent': {
          	templateUrl: 'app/straight/album.html',
          	controller: 'AlbumCtrl'
        }
      }
    })

    .state('app.song', {
      url: '/song/:songid',
      views: {
        'menuContent': {
          	templateUrl: 'app/straight/song.html',
          	controller: 'SongCtrl'
        }
      }
    })
  
    .state('app.tabartists', {
      url: '/tabartists',
      views: {
        'menuContent': {
          	templateUrl: 'app/tabbed/artists.html',
          	controller: 'ArtistsCtrl'
        }
      }
    })

    .state('app.tabartist', {
      url: '/tabartist/:artistid',
      views: {
        'menuContent': {
          	templateUrl: 'app/tabbed/artist.html',
          	controller: 'TabArtistCtrl'
        }
      }
    })

    .state('app.tabalbum', {
      url: '/tabalbum/:albumid',
      views: {
        'menuContent': {
          	templateUrl: 'app/tabbed/album.html',
          	controller: 'TabAlbumCtrl'
        }
      }
    })

    .state('app.tabsong', {
      url: '/tabsong/:songid',
      views: {
        'menuContent': {
          	templateUrl: 'app/tabbed/song.html',
          	controller: 'TabSongCtrl'
        }
      }
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/artists');
});
