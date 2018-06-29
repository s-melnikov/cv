(() => {

  const DATA_FILE_NAME = 'MOCK_DATA.json';

  angular
    .module('app')
    .factory('rest-service', restService);

  restService.$inject = ['$http', 'logger'];

  function restService($http, logger) {  

    const factory = {
      getAppData
    }

    return factory

    function getAppData() {
      return $http.get(DATA_FILE_NAME)
        .then(responseHandler)
        .catch(errorHandler);
    }

    function responseHandler({ data }) {
      logger.info('rest-service:responseHandler()', data);
      return data;
    }

    function errorHandler({ statusText }) {
      logger.error("rest-service:errorHandler()", statusText);
      return false;
    }
  }

})();