const express = require('express');

const http = require('http');

const app = express();

app.use((req,res,next) => {

});
const server = http.createServer(app)

server.listen(3000)
