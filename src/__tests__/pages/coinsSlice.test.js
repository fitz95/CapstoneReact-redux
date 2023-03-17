import reducer, { fetchCoins } from 'src/redux/coins/coinsSlice';

test('should return initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    list: [],
    isFetching: false,
  });
});

test('should handle a todo being added to an empty list', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    list: [],
    isFetching: false,
  });
  const previousState = {
    list: [],
    isFetching: false,
  };
  expect(reducer(previousState, fetchCoins())).toEqual({
    list: [],
    isFetching: false,
  });
});
