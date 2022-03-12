import PropTypes from 'prop-types';

export const CellsPropTypes = {
    isAlive: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ])
}

export type CellsProps = PropTypes.InferProps<typeof CellsPropTypes>;

