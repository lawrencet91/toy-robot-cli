const expect = require('expect');
const validation = require('../src/validation');

describe('Validation test:', () => {
  it('Function: isValidCoordinate - Valid X and Y', () => {
    const xAxis = 0;
    const yAxis = 0;
  
    let result = validation.isValidCoordinate(xAxis, yAxis);
  
    expect(result).toBeTruthy();
  });

  it('Function: isValidCoordinate - Valid X and invalid Y', () => {
    const xAxis = 0;
    const yAxis = 5;
  
    let result = validation.isValidCoordinate(xAxis, yAxis);
  
    expect(result).toBeFalsy();
  });

  it('Function: isValidCoordinate - Invalid X and valid Y', () => {
    const xAxis = 5;
    const yAxis = 0;
  
    let result = validation.isValidCoordinate(xAxis, yAxis);
  
    expect(result).toBeFalsy();
  });

  it('Function: isValidCoordinate - Invalid X and Y', () => {
    const xAxis = 5;
    const yAxis = 5;
  
    let result = validation.isValidCoordinate(xAxis, yAxis);
  
    expect(result).toBeFalsy();
  });

  it('Function: validateFirstInput - Valid input with uppercase', () => {
    const command = 'PLACE 1,1,NORTH';
  
    let result = validation.validateFirstInput(command);
  
    expect(result).toBeTruthy();
  });

  it('Function: validateFirstInput - InValid input', () => {
    let command = 'MOVE';
    let result = validation.validateFirstInput(command);
    expect(result).toBeFalsy();

    command = 'LEFT';
    result = validation.validateFirstInput(command);
    expect(result).toBeFalsy();

    command = 'RIGHT';
    result = validation.validateFirstInput(command);
    expect(result).toBeFalsy();

    command = 'REPORT';
    result = validation.validateFirstInput(command);
    expect(result).toBeFalsy();

    command = 'PLACE 1,1,NORTHH';
    result = validation.validateFirstInput(command);
    expect(result).toBeFalsy();

    command = 'PLACEE 1,1,NORTH';
    result = validation.validateFirstInput(command);
    expect(result).toBeFalsy();

    command = 'PLACE -1,6,NORTH';
    result = validation.validateFirstInput(command);
    expect(result).toBeFalsy();

    command = 'PLACE A,A,NORTH';
    result = validation.validateFirstInput(command);
    expect(result).toBeFalsy();
  });

  it('Function: validateSubsequenceInput - Valid input', () => {
    let command = 'PLACE 0,0,NORTH';
    let result = validation.validateSubsequenceInput(command);
    expect(result).toBeTruthy();
    
    command = 'MOVE';
    result = validation.validateSubsequenceInput(command);
    expect(result).toBeTruthy();

    command = 'LEFT';
    result = validation.validateSubsequenceInput(command);
    expect(result).toBeTruthy();

    command = 'RIGHT';
    result = validation.validateSubsequenceInput(command);
    expect(result).toBeTruthy();

    command = 'REPORT';
    result = validation.validateSubsequenceInput(command);
    expect(result).toBeTruthy();
  });

  
  it('Function: validateSubsequenceInput - Invalid input', () => {
    let command = 'PPLACE 0,0,NORTH';
    let result = validation.validateSubsequenceInput(command);
    expect(result).toBeFalsy();
    
    command = 'MOVEE';
    result = validation.validateSubsequenceInput(command);
    expect(result).toBeFalsy();

    command = 'LEFTT';
    result = validation.validateSubsequenceInput(command);
    expect(result).toBeFalsy();

    command = 'RRIGHT';
    result = validation.validateSubsequenceInput(command);
    expect(result).toBeFalsy();

    command = 'RREPORT';
    result = validation.validateSubsequenceInput(command);
    expect(result).toBeFalsy();

    command = 'TURN';
    result = validation.validateSubsequenceInput(command);
    expect(result).toBeFalsy();
  });
});