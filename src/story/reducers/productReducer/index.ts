/* eslint-disable prettier/prettier */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../../shared/types/productType';
import { PaginationType } from '../../../shared/types/paginationType';
interface ProductStore {
    products: ProductType[];
    searchProducts?: PaginationType<ProductType[]>;
}
const initialState: ProductStore = {
  products: [],
  searchProducts: undefined,
};

export const ProductSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    setSearchProductsAction: (state, action: PayloadAction<PaginationType<ProductType[]>| undefined>) => {
      state.searchProducts = action.payload;
    },
  },
});

export const { setProductsAction,setSearchProductsAction } = ProductSlice.actions;

export default ProductSlice.reducer;
