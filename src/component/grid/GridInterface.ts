import PropTypes from 'prop-types';
import { Alignments } from '../../constant/Enum';

export const GridPropTypes = {
    headerAlignment: PropTypes.oneOf<Alignments>([
        Alignments.left,
        Alignments.right,
        Alignments.center,
    ]),
}


export type GridProps = PropTypes.InferProps<typeof GridPropTypes>;