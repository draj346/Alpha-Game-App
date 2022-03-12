import React from 'react';
import { IRules, getValueBasedOnGameRules } from '../Rules'

describe('Rules', () => {

    describe('getValueBasedOnGameRules Function', () => {
        let currentElement = 1;

        test('should return 0 if currentElement is 1 and  array have more than 3 ones', () => {
            const array = [1, 0, 0, 1, 0, 1, 1];
            const gameRulesProp: IRules = {
                array, currentElement
            }

            const response = getValueBasedOnGameRules(gameRulesProp);
            expect(response).toEqual(0);
        });

        test('should return 0 if currentElement is 1 and  array have less than 2 ones', () => {
            const array = [0, 1, 0, 0];
            const gameRulesProp: IRules = {
                array, currentElement
            }

            const response = getValueBasedOnGameRules(gameRulesProp);
            expect(response).toEqual(0);
        });

        test('should return 1 if currentElement is 1 and  array have exactly 2 ones', () => {
            const array = [0, 1, 0, 1];
            const gameRulesProp: IRules = {
                array, currentElement
            }

            const response = getValueBasedOnGameRules(gameRulesProp);
            expect(response).toEqual(1);
        });

        test('should return 1 if currentElement is 1 and  array have exactly 3 ones', () => {
            const array = [0, 1, 0, 1, 0, 1];
            const gameRulesProp: IRules = {
                array, currentElement
            }

            const response = getValueBasedOnGameRules(gameRulesProp);
            expect(response).toEqual(1);
        });

        test('should return 1 if currentElement is 0 and  array have exactly 3 ones', () => {
            const array = [0, 1, 0, 1, 0, 1];
            currentElement = 0;
            const gameRulesProp: IRules = {
                array, currentElement
            }

            const response = getValueBasedOnGameRules(gameRulesProp);
            expect(response).toEqual(1);
        });

        test('should return 0 if currentElement is 0 and  array have not 3 ones', () => {
            const array = [0, 1, 0, 1, 0, 0];
            currentElement = 0;
            const gameRulesProp: IRules = {
                array, currentElement
            }

            const response = getValueBasedOnGameRules(gameRulesProp);
            expect(response).toEqual(0);
        });

    });

})