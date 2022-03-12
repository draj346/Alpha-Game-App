import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Labels } from '../../../constant/Label';

describe('App Page', () => {


  test("snapshot to be matched", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('renders app component with Alpha react test', () => {
    render(<App />);
    const linkElement = screen.getByText(Labels.HEADER);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders app component does not load different header apart from Labels.Header', () => {
    render(<App />);
    const linkElement = screen.queryAllByText(Labels.GAME_OVER)
    expect(linkElement).toEqual([]);
  });

})