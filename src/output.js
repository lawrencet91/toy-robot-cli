const chalk = require('chalk');
const logger = require('./logger');

const initialise = () => {
  logger.info('Please enter your command');
  logger.info('Enter HELP if you wants to see supported commands\n');
};

const showHelp = () => {
  logger.info('The valid commands: ');
  logger.info('PLACE x,y,cardinalPoint');
  logger.info('x or y needs to be an integer between 0-4, cardinalPoint needs to be one of [NORTH/WEST/SOUTH/EAST]');
  logger.info('MOVE');
  logger.info('LEFT');
  logger.info('RIGHT');
  logger.info('REPORT');
  logger.info('Press CTRL + C to exit the application \n');
};

const exportFunctions = {
  initialise,
  showHelp
};

module.exports = exportFunctions;