(() => {

  angular
    .module('app')
    .factory('logger', logger);

  function logger() {

    const info = console.log.bind(console);
    const warn = console.warn.bind(console);
    const error = console.error.bind(console);

    const factory = {
      info,
      warn,
      error
    }

    return factory;   
  }

})();