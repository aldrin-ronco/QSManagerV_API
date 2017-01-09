var fs = require('fs');
var path = require('path');

module.exports = function (app) {
    fs.readdirSync(path.join(__dirname, 'routes')).forEach(function (file) {
        var route = path.join(__dirname, 'routes', file.substr(0, file.indexOf('.')));
        console.log(route);
        app.use('/', require(route));
    });
}
