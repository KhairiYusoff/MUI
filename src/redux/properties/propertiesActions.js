// src/redux/properties/propertiesActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPropertiesAPI } from '../../services/api';

export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { filters } = getState();
      const response = await fetchPropertiesAPI(filters);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);