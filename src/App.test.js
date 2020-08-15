import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders photo title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/photo/i);
  expect(linkElement).toBeInTheDocument();
});
