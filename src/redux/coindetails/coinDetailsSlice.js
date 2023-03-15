import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoinDetails = createAsyncThunk('coindetails/fetch', async (id) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  return data;
});

const coinDetailsSlice = createSlice({
  name: 'coindetails',
  initialState: {
    list: [],
    isFectching: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinDetails.fulfilled, (state, action) => ({
        ...state,
        isFectching: false,
        list: action.payload,
      }))
      .addCase(fetchCoinDetails.pending, (state) => ({
        ...state,
        isFectching: true,
      }));
  },
});

export default coinDetailsSlice.reducer;
