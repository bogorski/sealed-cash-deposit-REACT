const express = require("express");
const app = express();
const config = require("./config");

const apiRouter = require("../routers/api");

//db
require("../db/mongoose");

//routes
app.use("/", apiRouter);

//server
app.listen(config.port, function () {
	console.log("server is listening..." + config.port);
});
