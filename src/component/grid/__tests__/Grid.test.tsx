import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from "../Grid";
import { Labels } from "../../../constant/Label";
import {
    IWithGrid,
    WithGridCalcProps,
} from "../../../hoc/withGridCalc/WithGridCalcInterface";

let mockIsGameOver = true;
let mockGridValues = [0, 1, 1, 0, 1, 0, 1, 0, 0];

jest.mock(
    "../../../hoc/withGridCalc/WithGridCalc",
    () =>
        (props: IWithGrid) =>
            (WrappedComponent: React.ComponentType<any & WithGridCalcProps>) =>
                (moreProps: any) =>
                (
                    <WrappedComponent
                        onTick={() => console.log("Button Pressed")}
                        isGameOver={mockIsGameOver}
                        gridValues={mockGridValues}
                        {...moreProps}
                    />
                )
);

describe("Grid Component", () => {

    afterAll(() => {
        jest.resetAllMocks()
    })

    test("to be snapshot", () => {
        const { container } = render(<Grid />);
        expect(container).toMatchSnapshot();
    });

    describe("Positive Scenario", () => {

        test("should able to see game over message if isGameOver Props is true", () => {
            render(<Grid />);
            const linkElement = screen.getByText(Labels.GAME_OVER);
            expect(linkElement).toBeInTheDocument();
        });

        test("should able to call onclick function when we click wrapper div", () => {
            jest.spyOn(console, "log").mockImplementation(() => { });
            render(<Grid />);
            const linkElement = screen.getByTestId("grid");
            linkElement.click();
            expect(console.log).toHaveBeenCalledWith("Button Pressed");
        });

        test("should able to load cells child component if array is not null", () => {
            render(<Grid />);
            const linkElement = screen.getAllByTestId("cells");
            expect(linkElement[0]).toBeInTheDocument();
        });

    })

    describe("Negative scenario", () => {

        test("should not load game over message if isGameOver Props is false", () => {
            mockIsGameOver = false;
            render(<Grid />);
            const linkElement = screen.queryByTestId('gameOverId');
            expect(linkElement).not.toBeInTheDocument();
        });

        test("should not load any cells component if grid values is empty array", () => {
            mockGridValues = [];
            render(<Grid />);
            const linkElement = screen.queryByTestId('cells');
            expect(linkElement).not.toBeInTheDocument();
        });

    });

});