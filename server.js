var http = require("http");
var express = require("express");
var app = express();
app.use(express.static("public"));
var server = http.createServer(app);
server.listen(process.env.PORT || 8080);

const jsonServer = require("json-server");
const jServer = jsonServer.create();
const router = jsonServer.router("examples.json");
const middlewares = jsonServer.defaults();
jServer.use(middlewares);
jServer.use(router);
jServer.listen(3000);
