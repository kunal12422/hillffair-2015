;(function(){


    var categoryListCtrl  = function($location){
        var vm = this;




        vm.categories = [
            {"id":0, "name":'Dramatics',"class":"drama"},
            {"id" :1, "name":'Music', "class":"music"},
            {"id":2, "name":'Dance', "class":"dance"},
            {"id":3, "name":'In4mals',"class":"in4mals"},
            {"id":4, "name": "Fine Art","class":"fineart"}
        ];


        vm.getClass = function (path) {
            if ($location.path().substr(0, path.length) === path) {

                return 'active';
            } else {
                return '';
            }
        };

    };





    angular.module('hillffair15App').controller('categoryListCtrl', ['$location',categoryListCtrl]);
})();