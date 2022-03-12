import PropTypes from 'prop-types';
import { Alignments } from '../../constant/Enum';

export const HeaderPropTypes = {
    headerAlignment: PropTypes.oneOf<Alignments>([
        Alignments.left,
        Alignments.right,
        Alignments.center,
    ]),
}

export type HeaderProps = PropTypes.InferProps<typeof HeaderPropTypes>;