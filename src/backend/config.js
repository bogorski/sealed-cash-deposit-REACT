module.exports = {
	port: process.env.PORT || 3000,
	database:
		process.env.DATABASE ||
		"mongodb+srv://mateusz:MsL20180@cluster0.n0fem.mongodb.net/test?retryWrites=true&w=majority",
};
