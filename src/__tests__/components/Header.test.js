import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from 'src/redux/store';
import Header from 'src/components/Header';

describe('RocketsLists', () => {
  it('renders correctly for reserved state', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
