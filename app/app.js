angular
  .module('app', [])
  .controller('AppController', AppController);

AppController.$inject = ['dataservice', 'logger'];

function AppController(dataservice, logger) {

  var vm = this;
  vm.body_class = "preloader";
  vm.getMonthName = getMonthName;
  vm.getPeriodString = getPeriodString;

  activate();

  function activate() {    
    getData().then(() => logger.info('Data received'));
  }

  function getData() {
    return dataservice
      .getData()
      .then(setData);
  }

  function setData(data) {
    vm.body_class = "";
    Object.assign(vm, data);
  }

  function getMonthName(index) {
    return MONTH_NAMES[index];
  }

  function getPeriodString(array) {
    return array ?
      `${MONTH_NAMES[array[0]]} ${array[1]}` : 'Current'
    }
}