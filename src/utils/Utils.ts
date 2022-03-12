export interface INeighbors {
    array: number[][];
    rowIndex: number;
    colIndex: number;
    rowSize: number;
    colSize: number;
}

export interface IListToMatrix {
    array: number[];
    colSize: number;
}


/**
 *
 * @param param
 * @returns 2D array
 * This function is used to convert 1D array into 2D based on col size.
 */
export const listToMatrix = ({ array, colSize}: IListToMatrix) => {
    var matrix:number[][] = [], i:number, k:number;
    for (i = 0, k = -1; i < array.length; i++) {
        if (i % colSize === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(array[i]);
    }
    return matrix;
}


/**
 *
 * @param param
 * @returns array with neighbors values
 * This function return the array which has all the neighbors value based on the 2D array, index and size.
 */
export const getNeighbors = ({array, rowIndex, colIndex, rowSize, colSize}: INeighbors) => {
    let output = [];
    try {
        if (rowIndex !== 0) {
            output.push(array[rowIndex-1][colIndex]); //This is used to get the top element
        }

        if (rowIndex !== rowSize-1) {
            output.push(array[rowIndex+1][colIndex]); //This is used to get bottom element

            if (colIndex !== colSize-1) {
                output.push(array[rowIndex+1][colIndex+1]); // This is used to get bottom right diagonal element
            }

            if (colIndex !== 0) {
                output.push(array[rowIndex+1][colIndex-1]); // This is used to get bottom left diagonal element
            }
        }

        if (colIndex !== 0) {
            output.push(array[rowIndex][colIndex-1]); // This is used to get left element
        }

        if (colIndex !== colSize-1) {
            output.push(array[rowIndex][colIndex+1]); //This is used to get right element

            if (rowIndex !== 0) {
                output.push(array[rowIndex-1][colIndex+1]); //This is used to get top right diagonal element
            }
        }

        if (rowIndex !== 0 && colIndex !== 0) {
            output.push(array[rowIndex-1][colIndex-1]); // This is used to get top left diagonal element
        }
    } catch(e) {
        console.log('error', e);
    }

    return output;
}


/**
 *
 * @param length
 * @returns array
 * This function is used to get array having 0,1 based on length which we passed.
 */
export const getRandomArrayBasedOnLength = (length:number) => {
    return Array.from({ length }, () =>
          Math.round(Math.random())
    );
}