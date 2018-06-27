'use strict';

const SUCCESS_RESPONSE_STATUS = 200;

angular
  .module('CVBuilderApp', [])
  .controller('AppController', AppController)
  .factory('dataservice', dataservice)
  .factory('logger', logger);

dataservice.$inject = ['$http', 'logger'];

AppController.$inject = ['dataservice', 'logger', '$http'];

function AppController(dataservice, logger) {

  var vm = this;
  vm.data = {};

  activate();

  function activate() {    
    return getData()
      .then(() => logger.info('Activated View'));
  }

  function getData() {
    return dataservice.getData()
      .then(data => {
        vm.data = data;
        return vm.data;
      })
  }
}

function dataservice($http, logger) { 

  const DATA_FILE_NAME = 'data.json';

  return {
    getData
  }

  function getData() {
    return $http.get(DATA_FILE_NAME)
      .then(responseHandler)
      .catch(errorHandler);
  }

  function responseHandler(response) {
    logger.info('dataservice:responseHandler(), data:', response.data);
    return response.data;
  }

  function errorHandler(response) {  
    const { statusText, status, xhrStatus, config: { url } } = response;
    logger.error("dataservice:getData() error:", statusText);
    return { statusText, status }
  }
}

function logger() {

  const info = console.log.bind(console);
  const warn = console.warn.bind(console);
  const error = console.error.bind(console);

  return {
    info,
    warn,
    error
  }
}