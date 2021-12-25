const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.send("server is working...");
});

app.listen(80, function () {
	console.log("server is listening...");
});
