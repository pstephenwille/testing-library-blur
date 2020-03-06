import React from 'react';
import {render, fireEvent, wait, act, screen} from '@testing-library/react';
import App from './App';
import http from './http';

test('Resolves ajax with set state - TRUE', async () => {
  await act(async () => {
    jest.spyOn(http, 'get').mockRejectedValue({data: [true]});
    render(<App/>);
  });

  const signedIn = screen.getByText(/signed in/i);
  expect(signedIn.textContent).toContain('true')
});

test('Resolves ajax with set state - FALSE', async () => {
  await act(async () => {
    jest.spyOn(http, 'get').mockRejectedValue({data: [false]});
    render(<App/>);
  });

  const signedIn = screen.getByText(/signed in/i);
  expect(signedIn.textContent).toContain('false')
});
