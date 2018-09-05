var app = angular.module('US', [
	'ui.router',
	'ngCookies'
	]);

app.config(routerConfig);

routerConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider']

function routerConfig($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '/views/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'vm'
	})
}
