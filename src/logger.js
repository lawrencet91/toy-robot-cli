const chalk = require('chalk');

const info = async message => {
  console.log(`${chalk.cyan('INFO')}, - ${message}`);
};

const success = async message => {
  console.log(`${chalk.green('SUCCESS')}, - ${message}`);
};

const error = async message => {
  console.log(`${chalk.red('ERROR')}, - ${message}`);
};

const exportFunctions = {
  info,
  success,
  error
};

module.exports = exportFunctions;