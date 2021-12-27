const mongoose = require("mongoose");
const { database } = require("../backend/config");

// db connect
mongoose.connect(database, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
