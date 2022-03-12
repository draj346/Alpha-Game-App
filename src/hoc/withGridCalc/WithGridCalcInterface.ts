import PropTypes from 'prop-types';

export const WithGridCalcPropTypes = {
    gridValues: PropTypes.arrayOf(PropTypes.number).isRequired,
    onTick: PropTypes.func.isRequired,
    isGameOver: PropTypes.bool.isRequired
}

export type WithGridCalcProps = PropTypes.InferProps<typeof WithGridCalcPropTypes>;

export interface IWithGrid {
    rowSize: number;
    columnSize: number;
}
