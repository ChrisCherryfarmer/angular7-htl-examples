/**
 * Created by christoph.kerschenba on 18.08.2016.
 */
var jsonServer = require('json-server')
var server = jsonServer.create()
var middlewares = jsonServer.defaults()
var fs = require('fs');
var path = require('path');
var express = require('express');

function concatJsonFiles(jsonfolder) {
    var currentDir = fs.realpathSync(__dirname) + jsonfolder;
    var db = {};
    var files = fs.readdirSync(currentDir);
    files.forEach(function (file) {
        if (path.extname(jsonfolder + file) === '.json') {
            db[path.basename(jsonfolder + file, '.json')] = require(currentDir + file);
        }
    });
    console.log(db);
    return db;
}

server.use(middlewares);

server.use(rewriter());

function rewriter() {
    var router = express.Router();
    router.all('*', function (req, res, next) {
        if (req.url.indexOf('?') !== -1) {
            var target = req.url.replace('?', '_');
            req.url = target;
        }
        next()
    });
    return router
}


server.use('/api/maturaball', jsonServer.router(concatJsonFiles('/api/maturaball/')));
server.use('/api', jsonServer.router(concatJsonFiles('/api/')));

server.listen(3004, function () {
    console.log('JSON Server is running')
});
