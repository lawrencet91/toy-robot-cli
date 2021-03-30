const expect = require('expect');
const directions = require('../src/directions');

describe('Directions test:', () => {
  process.env.NODE_ENV = 'test';
  it('Function: turnLeft - Valid output', () => {
    const cardinalPoints = ['EAST', 'SOUTH', 'WEST', 'NORTH'];
    const expectedResults = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    let count = 0;
    cardinalPoints.forEach(direction => {
      let result = directions.turnLeft(direction);
      expect(result).toBe(expectedResults[count]);
      count ++;
    });  
  });

  it('Function: turnRight - Valid output', () => {
    const cardinalPoints = ['EAST', 'SOUTH', 'WEST', 'NORTH'];
    const expectedResults = ['SOUTH', 'WEST', 'NORTH', 'EAST'];
    let count = 0;
    cardinalPoints.forEach(direction => {
      let result = directions.turnRight(direction);
      expect(result).toBe(expectedResults[count]);
      count ++;
    });  
  });

  it('Function: move - Valid output', () => {
    let result = directions.move(1, 1, 'NORTH');
    expect(result).toEqual([1, 2]);

    result = directions.move(1, 1, 'SOUTH');
    expect(result).toEqual([1, 0]);

    result = directions.move(1, 1, 'EAST');
    expect(result).toEqual([2, 1]);

    result = directions.move(1, 1, 'WEST');
    expect(result).toEqual([0, 1]);
  });
});