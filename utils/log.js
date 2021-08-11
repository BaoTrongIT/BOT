const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.blue('[ ❖ ] => ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❖ ] => ') + data);
			break;
		default:
			console.log(chalk.green(`${option} => `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.blue('[ Lazic Team ] => ') + data);
			break;
		case "error":
			console.log(chalk.red('[Lazic Team ] => ') + data);
			break;
		default:
			console.log(chalk.green(`[ Lazic Team ] => `) + data);
			break;
	}
}