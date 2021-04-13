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
  
  it('Function: turnLeft - Valid output', () => {
    const cardinalPoints = ['EAST', 'SOUTH', 'WEST', 'NORTH'];
    const expectedResults = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    let count = 0;
    cardinalPoints.forEach(direction => {
      let result = commands.turnLeft(direction);
      expect(result).toBe(expectedResults[count]);
      count ++;
    });  
  });

  it('Function: turnRight - Valid output', () => {
    const cardinalPoints = ['EAST', 'SOUTH', 'WEST', 'NORTH'];
    const expectedResults = ['SOUTH', 'WEST', 'NORTH', 'EAST'];
    let count = 0;
    cardinalPoints.forEach(direction => {
      let result = commands.turnRight(direction);
      expect(result).toBe(expectedResults[count]);
      count ++;
    });  
  });

  it('Function: move - Valid output', () => {
    let result = commands.move(1, 1, 'NORTH');
    expect(result).toEqual([1, 2]);

    result = commands.move(1, 1, 'SOUTH');
    expect(result).toEqual([1, 0]);

    result = commands.move(1, 1, 'EAST');
    expect(result).toEqual([2, 1]);

    result = commands.move(1, 1, 'WEST');
    expect(result).toEqual([0, 1]);
  });
});