

/**
 * @ngdoc overview
 * @name hillffair15App
 * @description
 * # hillffair15App
 *
 * Main module of the application.
 */

(function(){
	'use strict';
        angular.module('hillffair15App', [
                    'ui.router'

        ])

        .config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider){
            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise('#/');

            $stateProvider
                .state('home',{
                    url: '/',
                    controller: 'homepageCtrl',
                    controllerAs: 'home',
                    templateUrl: 'scripts/homepage/homepage.tmpl.html'
                })

                .state('event-timeline',{
                    url:'/events',
                    abstract:true,
                    templateUrl:'scripts/verticalTimeline/second.tmpl.html'
                })
                .state('event-timeline.view',{
                        url: '/details/:category',
                        views : {
                            'categories':{
                                controller: 'categoryListCtrl as vm',
                                templateUrl: 'scripts/verticalTimeline/models/categoryList.tmpl.html'
                            },
                            'timeline': {
                                controller: 'timelineCtrl as vm',
                                templateUrl:'scripts/verticalTimeline/models/timeline.tmpl.html',
                                resolve: {
                                        item:['$stateParams','selectEventFactory', function($stateParams, selectEventFactory){

                                          return  selectEventFactory.getEventById($stateParams.category);
                                        }]
                                }
                            }
                        }
                })

            ;


        }])


        .run(['$rootScope', function($rootScope){
            $rootScope.$on('$stateChangeStart', function(e , toState, toParams, fromState, fromParams){


                if(typeof $.fn.fullpage.destroy === 'function' && (fromState.name === 'home' && toState.name === "event-timeline.view") ){
                    $.fn.fullpage.destroy('all');
                    document.body.setAttribute('id', 'idCheck');

                }else if((toState.name === "event-timeline.view" && fromState.name === '') || (toState.name === fromState.name)){
                    document.body.setAttribute('id', 'idCheck');

                }else{
                    document.body.removeAttribute('id');
                }
            });
        }])
    ;

})();

