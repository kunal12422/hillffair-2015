(function(){



    var timelineCtrl  = function(item){
      var vm = this;
    //console.log(item);
        vm.content = item;


    };

    angular.module('hillffair15App').controller('timelineCtrl', ['item',timelineCtrl]);
})();