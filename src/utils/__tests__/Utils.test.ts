import React from 'react';
import { IListToMatrix, listToMatrix, INeighbors, getNeighbors, getRandomArrayBasedOnLength } from '../Utils'

describe('Utils Class', () => {

    describe('listToMatrix Function', () => {

        test('should convert 1d array into 2d', () => {
            const oneDArray = [1, 0, 0, 1, 1, 0, 0, 0, 1];
            const colSize = 3;
            const responseArray = [[1, 0, 0], [1, 1, 0], [0, 0, 1]];

            const listToMatrixProps: IListToMatrix = {
                array: oneDArray,
                colSize
            }

            const response = listToMatrix(listToMatrixProps);
            expect(response).toEqual(responseArray);
        });

        test('should not return true if we check different 2d array after response from method', () => {
            const oneDArray = [1, 0, 0, 1, 1, 0, 0, 0, 1];
            const colSize = 3;
            const responseArray = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
            const listToMatrixProps: IListToMatrix = {
                array: oneDArray,
                colSize
            }

            const response = listToMatrix(listToMatrixProps);
            expect(response).not.toEqual(responseArray);
        });

        test('should return the same array if colSize is greater than the 1d array length', () => {
            const oneDArray = [1, 0];
            const colSize = 3;
            const responseArray = [[1, 0]]
            const listToMatrixProps: IListToMatrix = {
                array: oneDArray,
                colSize
            }

            const response = listToMatrix(listToMatrixProps);
            expect(response).toEqual(responseArray);
        });
    });

    describe('getNeighbors Function,', () => {
        let array = [[1, 0, 0], [1, 1, 0], [0, 0, 1]];
        let rowSize = 3, colSize = 3;

        describe('should return the neighbor items from all the directions', () => {

            describe('for position 0 and 0', () => {

                test('positive scenario', () => {
                    const rowIndex = 0, colIndex = 0;
                    const neighborArray = [1, 1, 0]
                    const neighborsProps: INeighbors = {
                        array, rowIndex, colIndex, rowSize, colSize
                    }

                    const response = getNeighbors(neighborsProps);
                    expect(response).toEqual(neighborArray);
                })

                test('negative scenario', () => {
                    const rowIndex = 0, colIndex = 0;
                    const neighborArray = [1, 1, 1]
                    const neighborsProps: INeighbors = {
                        array, rowIndex, colIndex, rowSize, colSize
                    }

                    const response = getNeighbors(neighborsProps);
                    expect(response).not.toEqual(neighborArray);
                })

            });

            describe('for position 0 and 1', () => {

                test('positive scenario', () => {
                    const rowIndex = 0, colIndex = 1;
                    const neighborArray = [1, 0, 1, 1, 0]
                    const neighborsProps: INeighbors = {
                        array, rowIndex, colIndex, rowSize, colSize
                    }

                    const response = getNeighbors(neighborsProps);
                    expect(response).toEqual(neighborArray);
                })

                test('negative scenario', () => {
                    const rowIndex = 0, colIndex = 1;
                    const neighborArray = [1, 0, 1, 1, 1]
                    const neighborsProps: INeighbors = {
                        array, rowIndex, colIndex, rowSize, colSize
                    }

                    const response = getNeighbors(neighborsProps);
                    expect(response).not.toEqual(neighborArray);
                })

            });

            describe('for position 1 and 1', () => {

                test('positive scenario', () => {
                    const rowIndex = 1, colIndex = 1;
                    const neighborArray = [0, 0, 1, 0, 1, 0, 0, 1]
                    const neighborsProps: INeighbors = {
                        array, rowIndex, colIndex, rowSize, colSize
                    }

                    const response = getNeighbors(neighborsProps);
                    expect(response).toEqual(neighborArray);
                })

                test('negative scenario', () => {
                    const rowIndex = 1, colIndex = 1;
                    const neighborArray = [1, 1, 1, 0, 1, 0, 0, 1]
                    const neighborsProps: INeighbors = {
                        array, rowIndex, colIndex, rowSize, colSize
                    }

                    const response = getNeighbors(neighborsProps);
                    expect(response).not.toEqual(neighborArray);
                })

            });

        });

        test('should throw error if c', () => {
            jest.spyOn(console, 'log').mockImplementation(() => { });
            array = [];
            let rowSize = 3, colSize = 3, rowIndex = 3, colIndex = 1;
            const neighborsProps: INeighbors = {
                array, rowIndex, colIndex, rowSize, colSize
            }

            const response = getNeighbors(neighborsProps);
            expect(console.log).toHaveBeenCalled();
            expect(response).toEqual(array);
        })

    });

    describe('getRandomArrayBasedOnLength Function', () => {

        test('should return blank array if we pass length as 0', () => {
            const response = getRandomArrayBasedOnLength(0);
            expect(response).toEqual([]);
        })

        test('should return the array having length is equal to the length which we passed', () => {
            const length: number = 6;
            const response = getRandomArrayBasedOnLength(length);
            expect(response.length).toEqual(length);
        })

        test('should return array having only 0 and 1', () => {
            const response = getRandomArrayBasedOnLength(0);
            const isAllZeroOrOne = response.every(item => item === 0 || item === 1);
            expect(isAllZeroOrOne).toBeTruthy();
        })

    })

});