(() => {

  const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['rest-service', 'logger'];

  function AppController(rest, log) {

    var vm = this;
    vm.isInited = false;
    vm.getMonthName = getMonthName;
    vm.getPeriodString = getPeriodString;

    activate();

    function activate() {    
      rest.getAppData()
        .then(setAppData);
    }

    function setAppData(data) {
      console.log(data)
      if (data) {
        vm.isInited = true;
        Object.assign(vm, data);
      }      
    }

    function getMonthName(index) {
      return MONTH_NAMES[index];
    }

    function getPeriodString(item) {
      return item ?
        `${MONTH_NAMES[item.month]} ${item.year}` : 'Current'
      }
  }
  
})();