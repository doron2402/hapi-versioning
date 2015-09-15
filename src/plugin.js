'use strict';

exports.register = function(plugin, options, next){
  //Check if header contains version
  var DEFAULT_HEADER_KEY = 'version';
  var DEFAULT_PATTERN = /^(v[1-9])$/;
  var versionHeader = options.header || DEFAULT_HEADER_KEY;
  plugin.ext('onRequest', function(request, reply) {
    var urlPath = request.url.pathname.split('/');
    urlPath[0] === '' ? urlPath.shift() : null;
    var pattern = options.pattern || DEFAULT_PATTERN;
    if (pattern.test(request.headers[versionHeader]) && !pattern.test(urlPath[0])){
      urlPath.unshift('',request.headers[versionHeader]);
      request.setUrl(urlPath.join('/'));
    }
    reply.continue();
  });
  next();
};
