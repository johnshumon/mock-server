'use strict';

// let appRootDir = require("app-root-dir").get();
const
    logger  = require('morgan'),
    routing = require("json-routing"),
    restify = require('restify'),
    port = process.env.PORT || 8095
    ;

let server = restify.createServer({ name: 'RESTfull Mock API server.'});

server.use(logger('combined'));

let routeOptions = {
    routesPath       : "./api/routes",
    controllersPath: "./api/controllers",
    cors           : true,
    displayRoute    : true,
    defaultAction   : "index"
};

new routing.JsonRoute(server, routeOptions).start();

server
    .use(restify.fullResponse())
    .use(restify.bodyParser())
    .use(restify.requestLogger());


server.listen(port, function () {
    console.log(`Server listening on http://127.0.0.1:${port})`);
});