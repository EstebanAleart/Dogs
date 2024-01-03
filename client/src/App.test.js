import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import FormPage from "../src/components/FormPage"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


