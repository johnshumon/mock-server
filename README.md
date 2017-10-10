## Mock Server

Simple json-routing based RESTful mock server. Add your route in `routes/index.json` and corresponding controller for that route in `controllers/index.js`

Also docker version of the service is available. Build an image from Dockerfile. Run using following command:

* `docker run --name mc -it --rm -dp 8095:8095 mock-server`