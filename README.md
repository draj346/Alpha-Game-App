# React Game App

This is a game based react project. In this game we have a grid with multiple columns and rows. By default user will see some cells having black background with 1 value which we are consider and live state and some cells having white background with 0 value which we consider as dead state. Every time user click on the grid the Dead and Live state will change based on the below rule.

**Below are the rules to play game!**

- Rules
  - Any live cell with fewer then two live neighbors die.
  - Any live cell with two or three live neighbors lives on the next generation.
  - Any live cell with more than three live neighbors dies(overcrowding).
  - Any dead cell with exactly three live neighbors become a live cell(reproduction).

- Default Value
  - By Default grid has 10 rows and 10 columns.
  - Live means 1 and Dead means 0
  - In case the cell is Live we are showing 1 inside the cell having background black and font color white.
  - In case the cell is Dead we are showing 0 inside the cell having background white and font color black.
  - First time when game start we are showing the grid based on random number.

- Configuration
  - User has option to configure the grid rows and column. To do that he need to open **src/constant/Config.ts** and then need to change the grid size rows and columns.
  - User can configure the label of Dead and Live. To do that he need to open **src/constant/Label.ts** and then need to change the Dead and Alive one.
  - User has option to configure the background color. To do that he need to open **src/constant/Color.ts** and then need to change the BACKGROUND_ALIVE and BACKGROUND_DEAD color.
  - User has option to configure the text color. To do that he need to open **src/constant/Color.ts** and then need to change the FOREGROUND_ALIVE and FOREGROUND_DEAD color.
  - To add new rules in future we need to add logic in **src/utils/Rules.ts** file.

## How to run the application
- First we need to donwload the Application
- Then navigate the project directory and enter `npm i` command to install node_modules.
- To run the project we need to navigate the project directory and run `npm start` command
- To run the unit test cases we need to navigate the project directory and run `npm test` command
