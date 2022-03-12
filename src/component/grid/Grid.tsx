import React, { FunctionComponent, useState } from "react";
import { Config } from "../../constant/Config";
import { Labels } from "../../constant/Label";
import withGridCalculation from "../../hoc/withGridCalc/WithGridCalc";
import { IWithGrid, WithGridCalcProps } from "../../hoc/withGridCalc/WithGridCalcInterface";
import Cells from "../cells/Cells";
import "./Grid.scss";

const Grid: FunctionComponent<WithGridCalcProps> = (props) => {
    const [gridColumnSize] = useState(Config.gridSize.column);

    return (
        <div className="grid" data-testid="grid" onClick={props.onTick}>
            {
                React.Children.toArray(
                    props.gridValues.map((data, index) => {
                        return (
                            <>
                                <Cells isAlive={!!data} value={!!data ? Labels.ALIVE : Labels.DEAD}></Cells>
                                {(index + 1) % gridColumnSize === 0 ? <br /> : ""}
                            </>
                        );
                    })
                )
            }
            {
                props.isGameOver ? (<h4 data-testid="gameOverId">{Labels.GAME_OVER}</h4>) : ""
            }
        </div>
    );
};

const mapStateToProps: IWithGrid = {
    columnSize: Config.gridSize.column,
    rowSize: Config.gridSize.row,
}

export default React.memo(withGridCalculation(mapStateToProps)(Grid));