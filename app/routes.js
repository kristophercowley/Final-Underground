app.config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: ('/home'),
            templateUrl: ('/app/templates/home.html'),
            controller: ('MainController')
        })

        .state('witchDoctor', {
            url: '/witchDoctor',
            templateUrl: '/app/templates/witchDoctor.html',
            controller: 'MainController'
        })
        
        // .state('login', {
        //     url: '/page1',
        //     templateUrl: 'templates/login.html',
        //     controller: 'loginCtrl'
        // })
})