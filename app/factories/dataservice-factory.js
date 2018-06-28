(() => {

  const DATA_FILE_NAME = 'data.json';

  angular
    .module('app')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', 'logger'];

  function dataservice($http, logger) {  

    const factory = {
      getData
    }

    return factory

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

})();