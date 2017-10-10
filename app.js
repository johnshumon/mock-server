/*jslint node: true*/
'use strict';

const
    express = require('express'),
    morgan = require('morgan'),
    routing = require('json-routing'),
    appRootDir = require('app-root-dir').get(),
    path = appRootDir + '/views/',
    port = process.env.PORT || 8095,
    router = express.Router()
    ;

let routeOptions = {
    routesPath      : "./api/routes",
    controllerPath  : "./api/controllers",
    cors            : true,
    displayRoute    : true,
    defaultAction   : "index",
    processDir		: process.cwd()
};


let app = express();
app.use(morgan('combined'));
app.use(express.static(path));
app.use('/', router);

router.get('/', function (req, res) {
    res.sendFile(path + "index.html");
});

new routing.JsonRoute(app, routeOptions).start();

app.listen(port,  () => {
    console.log(`Server running on http://host_ip:${port}`);
});