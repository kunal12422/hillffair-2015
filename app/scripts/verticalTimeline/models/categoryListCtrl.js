(function(){


    var categoryListCtrl  = function($location){
        var vm = this;

        vm.categories = [
           {"id":0, "name": "Highlights ","class":"Highlights"},
            {"id":1, "name":'Dramatics',"class":"drama"},
            {"id" :2, "name":'Music', "class":"music"},
            {"id":3, "name":'Dance', "class":"dance"},
            {"id":4, "name":'In4mals',"class":"in4mals"},
            {"id":5, "name": "Fine Arts","class":"fineart"}

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
