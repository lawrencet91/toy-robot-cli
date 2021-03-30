const expect = require('expect');
const commands = require('../src/commands');
const constants = require('../src/constants');

describe('Commands test:', () => {
  process.env.NODE_ENV = 'test';
  it('Function: placeRobot - Valid output', () => {
    const command = 'PLACE 1,1,NORTH';
    const result = commands.placeRobot(command);
    expect(result).toEqual([1,1,'NORTH',true]);
  });

  it('Function: changeLocation', () => {
    const robot = {
      xCoordinate: constants.board.startingX,
      yCoordinate: constants.board.startingY,
      facingDirection: 'NORTH'
    };
    let expectedResult = {
      xCoordinate: constants.board.startingX,
      yCoordinate: 1,
      facingDirection: 'NORTH'
    }
    let command = 'MOVE';
    let result = commands.changeLocation(command, robot);
    expect(result).toEqual(expectedResult);

    expectedResult = {
      xCoordinate: constants.board.startingX,
      yCoordinate: 1,
      facingDirection: 'WEST'
    }
    command = 'LEFT';
    result = commands.changeLocation(command, robot);
    expect(result).toEqual(expectedResult);


    expectedResult = {
      xCoordinate: constants.board.startingX,
      yCoordinate: 1,
      facingDirection: 'NORTH'
    }
    command = 'RIGHT';
    result = commands.changeLocation(command, robot);
    expect(result).toEqual(expectedResult);

    command = 'REPORT';
    commands.changeLocation(command, robot);
    expect(result).toEqual(expectedResult);
  });

});