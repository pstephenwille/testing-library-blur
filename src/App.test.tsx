import React from 'react';
import {render, fireEvent, wait, screen} from '@testing-library/react';
import App from './App';

test.only('renders learn react link', async (done) => {
  render(<App/>);
  const input = screen.getByLabelText(/Customer Email/i);
  const errorMsg = screen.getByText(/valid email/i);

  fireEvent.change(input, {target: {value: 'woot@home'}});
  fireEvent.blur(input);

  expect(errorMsg).not.toBeVisible()

});
