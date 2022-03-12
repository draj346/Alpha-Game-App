import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Loading } from "../../component/loader/Loading";
import { getValueBasedOnGameRules } from "../../utils/Rules";
import {
  getNeighbors,
  getRandomArrayBasedOnLength,
  IListToMatrix,
  INeighbors,
  listToMatrix,
} from "../../utils/Utils";
import {
  IWithGrid,
  WithGridCalcProps,
  WithGridCalcPropTypes,
} from "./WithGridCalcInterface";

const withGridCalculation =
  (props: IWithGrid) =>
  (WrappedComponent: React.ComponentType<any & WithGridCalcProps>) => {
    const ComponentWithExtraInfo = (moreProps: any) => {
      const [gridValues, setGridValues] = useState<number[]>([]);
      const [isGameOver, setIsGameOver] = useState(false);

      useEffect(() => {
        const totalSize = props.rowSize * props.columnSize;
        const data = getRandomArrayBasedOnLength(totalSize);
        setGridValues(data);
      }, []);

      // THis function has logic to update the grid
      const getUpdatedGridValue = useCallback((listToMatrixProps:IListToMatrix) => {
        const twoDArray = listToMatrix(listToMatrixProps);
        const copyTwoDArray: number[][] = JSON.parse(JSON.stringify(twoDArray));
        const neighborsObj: INeighbors = {
          array: twoDArray,
          rowIndex: 0,
          colIndex: 0,
          rowSize: props.rowSize,
          colSize: props.columnSize,
        };

        for (let i = 0; i < props.rowSize; i++) {
          for (let j = 0; j < props.columnSize; j++) {
            neighborsObj.rowIndex = i;
            neighborsObj.colIndex = j;
            const neighborsArray = getNeighbors(neighborsObj);
            const newValue = getValueBasedOnGameRules({
              array: neighborsArray,
              currentElement: twoDArray[i][j],
            });
            copyTwoDArray[i][j] = newValue;
          }
        }

        return copyTwoDArray.flat();
      }, []);

      // This is onclick function of grid which call the getUpdatedGridValue to update the value
      const onTick = useCallback(() => {
        const listToMatrixProps: IListToMatrix = {
          array: gridValues,
          colSize: props.columnSize,
        };
        const updatedGridValues = getUpdatedGridValue(listToMatrixProps);

        // Since we are create array with new reference so this is one of the way to check whether the game stuck
        // or not. If the condition matched in that case we can assume that we are getting same Live and Dead value
        // again and again.
        if (JSON.stringify(updatedGridValues) === JSON.stringify(gridValues)) {
          setIsGameOver(true);
        } else {
          setGridValues(updatedGridValues);
          const checkIfGameOver = updatedGridValues.find((data) => data === 1);
          if (!checkIfGameOver) {
            setIsGameOver(true);
          }
        }
      }, [gridValues, getUpdatedGridValue]);
     
      const WrappedMemoComponent = useMemo(
        () => (
          <WrappedComponent
            {...moreProps}
            onTick={onTick}
            isGameOver={isGameOver}
            gridValues={gridValues}
          />
        ), [moreProps, gridValues, isGameOver, onTick]);

      const LoadingMemo = useMemo(
        () => (
          <><Loading /></>
        ), []);

      return (
        <>{gridValues.length === 0 ? LoadingMemo : WrappedMemoComponent}</>
      );
      
    };
    return ComponentWithExtraInfo;
  };


withGridCalculation.prototype = WithGridCalcPropTypes;

export default withGridCalculation;