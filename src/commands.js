const directions = require('./directions.js');
const logger = require('./logger.js');
const constants = require('./constants.js');
const validation = require('./validation');

/**
 * Actions for the robot
 *
 * @param {command} The user input.
 * @param {robot} The robot contains of x,y and cardinalPoint.
 * @return {robot} The state of the robot
 */
const changeLocation = (command, robot) => {
  let {xCoordinate, yCoordinate, facingDirection} = robot;
  switch (command) {    
    case constants.commands.MOVE:
      const [newX, newY] = directions.move(parseInt(xCoordinate), parseInt(yCoordinate), facingDirection);
      robot.xCoordinate = newX;
      robot.yCoordinate = newY;
      break;
    case constants.commands.LEFT:
      robot.facingDirection = directions.turnLeft(facingDirection);
      break;
    case constants.commands.RIGHT:
      robot.facingDirection = directions.turnRight(facingDirection);
      break;
    case constants.commands.REPORT:
      const location = [xCoordinate, yCoordinate, facingDirection].join();
      if (process.env.NODE_ENV !== 'test') {
        logger.success(`\nCurrent position of the toy robot: ${location}\n`);
      }
  }

  return robot;
};

/**
 * Return the location of the robot
 *
 * @param {command} The user input.
 * @return {xAxis} x-axis of the robot.
 * @return {yAxis} y-axis of the robot.
 * @return {direction} cardinal point of the robot.
 * @return {validCoordinate} if the location is within the board size.
 */
const placeRobot = (command) => {
  const coordinate = command.split(constants.regex.GET_COORINATE_REGEX);
  const xAxis = parseInt(coordinate[1]);
  const yAxis = parseInt(coordinate[2]);
  const direction = coordinate[3];
  const validCoordinate = validation.isValidCoordinate(xAxis, yAxis);

  return [xAxis, yAxis, direction, validCoordinate];
};

const exportFunctions = {
  changeLocation,
  placeRobot
};

module.exports = exportFunctions;