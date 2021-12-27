const Cat = require("../../db/models/note");

module.exports = {
	homepage(req, res) {
		const kitty = new Cat({ name: "34asd3" });
		kitty.save().then(() => console.log("dodane"));

		res.send("Strona główna działa!");
	},
};
