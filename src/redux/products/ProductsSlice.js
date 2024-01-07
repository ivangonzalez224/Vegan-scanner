import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycbyoa05cltxTJMeMuJV6n85OXIe_kMNbeP0v3kPDteIl0DGCIGPKx5UWvH-IQQQV6cLq/exec',
      );
      const endData = response.data.data;
      return endData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
const initialState = {
  productItems: [],
  error: '',
};
const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productItems = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export const { checkProduct } = productsSlice.actions;
export default productsSlice.reducer;
