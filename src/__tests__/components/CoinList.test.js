import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from 'src/redux/store';
import CoinList from 'src/components/CoinList';

describe('RocketsLists', () => {
  it('renders correctly for reserved state', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CoinList />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
