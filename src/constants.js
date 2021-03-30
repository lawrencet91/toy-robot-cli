const board = 
{
  maxColumn: 5,
  maxRow: 5,
  startingX: 0,
  startingY: 0
};

const commands = 
{
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  REPORT: 'REPORT'
};

const regex =
{
  FIRST_INPUT_REGEX: /^PLACE\s[0-4],[0-4],(NORTH|WEST|EAST|SOUTH)$/,
  SUBSEQUENT_INPUT_REGEX: /^PLACE\s[0-4],[0-4],(NORTH|WEST|EAST|SOUTH)$|^MOVE$|^LEFT$|^RIGHT$|^REPORT$/,
  GET_COORINATE_REGEX: /[\s,]/
};

const turnLeft = {
  NORTH: 'WEST',
  EAST: 'NORTH',
  SOUTH: 'EAST',
  WEST: 'SOUTH'
};

const turnRight = {
  NORTH: 'EAST',
  EAST: 'SOUTH',
  SOUTH: 'WEST',
  WEST: 'NORTH'
}

const exportFunctions = {
  board,
  commands,
  regex,
  turnLeft,
  turnRight
};

module.exports = exportFunctions;
