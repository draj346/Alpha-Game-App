import React from 'react';
import { render, screen } from '@testing-library/react';
import Cells from '../Cells';
import { Config } from '../../../constant/Config';

describe('Cells Component', () => {

    test('to be snapshot', () => {
        const { container } = render(<Cells isAlive={true} value='D' />);
        expect(container).toMatchSnapshot();
    })

    test('should able to see D as Text', () => {
        render(<Cells isAlive={true} value='D' />);
        const linkElement = screen.getByText(/D/g);
        expect(linkElement).toBeInTheDocument();
    });

    describe('Background color style', () => {

        test('should able to see background color black is isAlive true', () => {
            render(<Cells isAlive={true} value='D' />);
            const individualCell = screen.getByTestId('cells');
            expect(individualCell).toHaveStyle(`background-color: rgb(0, 0, 0);`);
        });

        test('should able to see background color white is isAlive false', () => {
            render(<Cells isAlive={false} value='D' />);
            const individualCell = screen.getByTestId('cells');
            expect(individualCell).toHaveStyle(`background-color: rgb(255, 255, 255);`);
        });

    });

    describe('TextColor style', () => {

        test('should able to see background color black is isAlive true', () => {
            render(<Cells isAlive={true} value='D' />);
            const individualCell = screen.getByTestId('cells');
            expect(individualCell).toHaveStyle(`color: rgb(255, 255, 255);`);
        });

        test('should able to see background color white is isAlive false', () => {
            render(<Cells isAlive={false} value='D' />);
            const individualCell = screen.getByTestId('cells');
            expect(individualCell).toHaveStyle(`color: rgb(0, 0, 0);`);
        });

    });

    describe('width style', () => {

        test('should able to see width 50% of what we define in constant if grid row size is >= 25', () => {
            const rowSize = Config.gridSize.row;
            Config.gridSize.row = 25;

            render(<Cells isAlive={false} value='D' />);
            const individualCell = screen.getByTestId('cells');
            Config.gridSize.row = rowSize;

            expect(individualCell).toHaveStyle(`width: ${Config.blockWidth / 2}px`);
        });

        test('should able to see Config.blockWidth as a width if grid row size is < 25', () => {
            const rowSize = Config.gridSize.row;
            Config.gridSize.row = 4;

            render(<Cells isAlive={false} value='D' />);
            const individualCell = screen.getByTestId('cells');
            expect(individualCell).toHaveStyle(`width: ${Config.blockWidth}px`);

            Config.gridSize.row = rowSize;
        });

    })

    describe('height style', () => {

        test('should able to see height 50% of what we define in constant if grid row size is >= 25', () => {
            const rowSize = Config.gridSize.row;
            Config.gridSize.row = 25;

            render(<Cells isAlive={false} value='D' />);
            const individualCell = screen.getByTestId('cells');
            expect(individualCell).toHaveStyle(`height: ${Config.blockHeight / 2}px`);

            Config.gridSize.row = rowSize;
        });

        test('should able to see Config.blockHeight as a height if grid row size is < 25', () => {
            const rowSize = Config.gridSize.row;
            Config.gridSize.row = 4;

            render(<Cells isAlive={false} value='D' />);
            const individualCell = screen.getByTestId('cells');
            expect(individualCell).toHaveStyle(`height: ${Config.blockHeight}px`);

            Config.gridSize.row = rowSize;

        });
    })
})