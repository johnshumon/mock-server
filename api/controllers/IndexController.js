/*jslint node: true*/
'use strict';

module.exports = {
    index,
    service1,
    service2,
    service3
};

function index(req, res) {
    console.log(req.headers);
    res.send("index page");
}

function service1(req, res) {
    console.log(req.headers);

    res.send({"response": {"body": {"message": "hi"}}})
}

function service2(req, res) {
    console.log(req.headers);
    res.send({"dataEventDetails": {"dataEventUnit": "MB"}});
}


function service3(req, res) {
    console.log(req.headers);

    res.send({"response": {"body": {"message": "from service3"}}})
}
