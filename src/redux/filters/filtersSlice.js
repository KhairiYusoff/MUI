// src/redux/filters/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    propertyType: '',
    rentRange: '',
    saleType: 'rent', // 'rent' or 'sale'
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setPropertyType: (state, action) => {
      state.propertyType = action.payload;
    },
    setRentRange: (state, action) => {
      state.rentRange = action.payload;
    },
    setSaleType: (state, action) => {
      state.saleType = action.payload;
    },
    resetFilters: (state) => {
      state.location = '';
      state.propertyType = '';
      state.rentRange = '';
      state.saleType = 'rent';
    },
  },
});

export const { setLocation, setPropertyType, setRentRange, setSaleType, resetFilters } = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;