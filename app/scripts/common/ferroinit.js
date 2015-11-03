(function(){
    var ferroinit = function(){



        return {
            restrict: 'EA',
            link: function(scope, elem, attr){
                $('#ferro').ferroMenu({
                    position    :   'left-top' ,
                    delay       : 50,
                    rotation    : 720,
                    margin      : 20
                });

            }
        }
    };




    angular.module('hillffair15App').directive('ferroinit', ferroinit);
})();