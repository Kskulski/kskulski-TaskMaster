var http = require("http");
var express = require("express");
var app = express();
app.use(express.static("public"));
var server = http.createServer(app);
server.listen(process.env.PORT || 8080);

var jsonServer = require("json-server");
var jServer = jsonServer.create();
var router = jsonServer.router("examples.json");
var middlewares = jsonServer.defaults();
jServer.use(middlewares);
jServer.use(router);
var webjServer = http.createServer(jServer)
webjServer.listen(3000);
