var isBot = require('is-bot');

module.exports = function (options) {

  return function(req, res, next) {
    var agent = req.headers['User-Agent'] || req.headers['user-agent'];
    if (agent && isBot(agent)) req.isBot = true;
    next();
  }
};