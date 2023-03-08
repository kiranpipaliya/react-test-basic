import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
  test('Greet Render Currently', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test('Greet Render with name', () => {
    render(<Greet name='Jonash' />);
    const textElement = screen.getByText(/Hello Jonash/i);
    expect(textElement).toBeInTheDocument();
  });
});
