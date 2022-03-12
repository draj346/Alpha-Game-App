import React from "react";
import { render, screen } from "@testing-library/react";
import { IWithGrid } from "../WithGridCalcInterface";
import Grid from "../../../component/grid/Grid";
import withGridCalculation from "../WithGridCalc";
import * as Utils from "../../../utils/Utils";

describe("WithGridCalc", () => {
  const mapStateToProps: IWithGrid = {
    columnSize: 2,
    rowSize: 2,
  };
  const WithGridComponent = withGridCalculation(mapStateToProps)(Grid);

  afterAll(() => {
    jest.resetAllMocks();
  })

  test("snapshot to be matched", () => {
    jest.spyOn(Utils, "getRandomArrayBasedOnLength").mockImplementation(() => [0, 1, 1, 0]);
    const { container } = render(<WithGridComponent />);
    expect(container).toMatchSnapshot();
  });

  test("should return wrapped component with updated props if gridValues length is not 0", () => {
    jest.spyOn(Utils, "getRandomArrayBasedOnLength").mockImplementation(() => [0, 1, 1, 0]);
    render(<WithGridComponent />);
    const linkElement = screen.getAllByTestId("cells");
    expect(linkElement[0]).toBeInTheDocument();
  });

});