import { Button, ThemeButton } from "./Button";
import { render, screen } from '@testing-library/react';
import * as cl from './Button.module.scss';

describe('button', () => {
  test('test with only first param', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test('test2', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass(cl.clear);
  });
});