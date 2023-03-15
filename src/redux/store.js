import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coinsReducer from './coins/coinsSlice';
import coinDetailsReducer from './coindetails/coinDetailsSlice';

const store = configureStore({
  reducer: combineReducers({
    coins: coinsReducer,
    coinDetails: coinDetailsReducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
