import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        ' ',
      );
      const data = response;
      const endData = data.data;
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
  reducers: {
    checkProduct: (state, action) => {

    },
  },
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
