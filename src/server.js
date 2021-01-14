require("dotenv").config();

const app = require("./app");

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || "development";

/* eslint-disable no-console */
app.listen(port, async () => {
	console.debug(`Server is listening on port ${port}`);
	console.debug(`Current environment is ${env}`);
});

// require("./models").sequelize.sync().then(() => {
// 	console.debug('Models are synchronized successfully');
// }).catch(err => {
// 	console.error('Unable to synchronize the models: ', err);
// });
