// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REACT_APP = /^REACT_APP_/i;
var NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development');
var API_HOST = NODE_ENV === 'development' ? JSON.stringify('http://localhost:4000') : JSON.stringify('http://localhost:4000');
console.log(API_HOST);

module.exports = Object
  .keys(process.env)
  .filter(key => REACT_APP.test(key))
  .reduce((env, key) => {
    env['process.env.' + key] = JSON.stringify(process.env[key]);
    return env;
  }, {
    'process.env': {
      'NODE_ENV': NODE_ENV,
      'API_HOST': API_HOST,
    }
  });
