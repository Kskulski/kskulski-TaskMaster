var http = require("http");
var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/examples", function (request, response) {
    response.send(examples.json);
});
var server = http.createServer(app);
server.listen(process.env.PORT || 8080);