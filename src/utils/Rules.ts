export interface IRules {
    array: number[];
    currentElement: number;
}

/**
 *
 * @param param
 * Rules which we are following:-
 * currentElement = 1 && count(1) > 3 = Dead
 * currentElement = 1 && count(1) < 2 = Dead
 * currentElement = 1 && count(1) === 2 || count(1) === 3 = Live
 * currentElement = 0 && count(1) === 3 = Live
 */

export const getValueBasedOnGameRules = ({array, currentElement}: IRules) => {
    let value = 0;

    // This is remove all the 0 from the list
    array = array.filter(data => !!data);

    if (currentElement === 1) {
        value = (array.length === 2 || array.length === 3) ? 1 : 0;
    } else {
        value = array.length === 3 ? 1 : 0;
    }

    return value
}