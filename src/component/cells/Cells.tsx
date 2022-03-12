import React, { FunctionComponent } from "react";
import { Colors } from "../../constant/Color";
import { Config } from "../../constant/Config";
import "./Cells.scss"
import { CellsProps, CellsPropTypes } from "./CellsInterface";

const Cells: FunctionComponent<CellsProps> = (props) => {

    return (
        <div
            className="cells"
            data-testid="cells"
            style={{
                width: Config.gridSize.row >= 25 ? Config.blockWidth / 2 : Config.blockWidth,
                height: Config.gridSize.row >= 25 ? Config.blockHeight / 2 : Config.blockWidth,
                backgroundColor: props.isAlive ? Colors.BACKGROUND_ALIVE : Colors.BACKGROUND_DEAD,
                color: props.isAlive ? Colors.FOREGROUND_ALIVE : Colors.FOREGROUND_DEAD,
            }}
        >
            {props.value}
        </div>
    );
};

Cells.propTypes = CellsPropTypes;

export default React.memo(Cells);  