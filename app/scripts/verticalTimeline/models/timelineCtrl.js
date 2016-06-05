(function(){



    var timelineCtrl  = function(item){
      var vm = this;
        vm.content = item;


    };

    angular.module('hillffair15App').controller('timelineCtrl', ['item',timelineCtrl]);
})();
