// src/redux/properties/propertiesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchProperties } from './propertiesActions';

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const selectAllProperties = (state) => state.properties.list;
export const selectPropertiesStatus = (state) => state.properties.status;
export const selectPropertiesError = (state) => state.properties.error;

export default propertiesSlice.reducer;