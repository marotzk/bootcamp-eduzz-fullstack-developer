import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders simple text with DIO', () => {
  render(<App />);

  const textEl = screen.getByText(/Digital Innovation One - DIO/);

  expect(textEl).toBeInTheDocument();
});
