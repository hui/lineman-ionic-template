angular.module("app").config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(false);
  // $locationProvider.hashPrefix('!');

  $stateProvider.state('home', {
    url: '/home',
    views: { 'home': {templateUrl: 'home.html'} }
  }).state('list-of-books', {
    url: '/list-of-books',
    views: { 'books': {templateUrl: 'books.html', controller: 'BooksController'} }
    // uncomment if you want to see an example of a route that resolves a request prior to rendering
    // resolve: {
    //   books : function(BookService) {
    //     return BookService.get();
    //   }
    // }
  });

  $urlRouterProvider.otherwise('home');
});