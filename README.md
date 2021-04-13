This is a command line interface to simulate a toy robot moving on a 5x5 table.

Available commands:
1. PLACE X,Y,F
    - X: X-axis of the board
    - Y: Y-axis of the board
    - F: Cardinal point
  Example: PLACE 0,0,NORTH
2. MOVE
    - Move the robot one step forward
3. LEFT
    - Rotate the robot 90 degrees to the left
4. RIGHT
    - Rotate the robot 90 degrees to the right
5. REPORT
    - Report current location

Install the npm dependencies
1. cd into this folder's root folder and run npm install to install all project dependencies

Running Toy Robot
1. Run npm start in your command line at the project's root or you can pass in a text file 
   - npm start D:\PD\toy-robot-cli\src\test.txt

Running the tests
1. Run npm test in your command line at the project's root.
