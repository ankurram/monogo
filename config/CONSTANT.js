var path = require('path');
var fs = require('fs');

module.exports = {
  PATHS: {
    CONSTANTS: path.join(process.env.APP_ROOT, 'config/CONSTANT'),
    MIDDLEWARE: path.join(process.env.APP_ROOT, 'module/middleware/checking'),
    QUERY:path.join(process.env.APP_ROOT,'module/query'),
         },
}
