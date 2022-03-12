import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { Alignments } from '../../../constant/Enum';
import { Labels } from '../../../constant/Label';

describe('Header Component', () => {

    test('to be snapshot', () => {
        const { container } = render(<Header headerAlignment={Alignments.center}>{Labels.HEADER}</Header>);
        expect(container).toMatchSnapshot();
    })

    test('should able to show Alpha react test in Header which define in Labels.Header', () => {
        render(<Header headerAlignment={Alignments.center}>{Labels.HEADER}</Header>);
        const linkElement = screen.getByText(Labels.HEADER);
        expect(linkElement).toBeInTheDocument();
    });

    test('should select align left header if we not pass headerAlignment', () => {
        render(<Header>{Labels.HEADER}</Header>);
        const linkElement = screen.getByTestId('header');
        expect(linkElement).toHaveStyle(`align-items:left`);
    })

    test('should show the headerAlignment which we pass in props', () => {
        render(<Header headerAlignment={Alignments.center}>{Labels.HEADER}</Header>);
        const linkElement = screen.getByTestId('header');
        expect(linkElement).toHaveStyle(`align-items:center`);
    })

})