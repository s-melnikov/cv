(() => {  

  angular
    .module('app')
    .directive('period', period);

  function period() {
    const directive = {
      link: link,
      templateUrl: 'app/directives/period-directive.html'
    };

    return directive;

    function link(scope, element, attrs) {
      // let period = 
      console.log(attrs.start)
      console.log(attrs.end)
    }
  }

})();