import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import App from 'src/App';

test('Displays a heading', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  const heading = screen.getByRole('heading', {
    name: /CRYPTO MARKET VALUE/i,
  });
  expect(heading).toBeInTheDocument();
});
