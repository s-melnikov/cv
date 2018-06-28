(() => {

  const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  angular
    .module('app')
    .directive('period', period);

  function period() {
    const directive = {
      link: link,
      templateUrl: 'app/components/period/period-directive.template.html'
    };

    return directive;

    function link(scope, element, attrs) {
      // let period = 
      console.log(attrs.start)
      console.log(attrs.end)
    }
  }

})();