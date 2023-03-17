import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from 'src/redux/store';
import CoinDetailUi from 'src/components/CoinDetailUi';

describe('RocketsLists', () => {
  it('renders correctly for reserved state', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CoinDetailUi />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
