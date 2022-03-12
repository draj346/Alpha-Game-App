import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../Loading';

describe('Loader Component', () => {

    test('to be snapshot', () => {
        const { container } = render(<Loading />);
        expect(container).toMatchSnapshot();
    })

})