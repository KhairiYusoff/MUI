// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import propertiesReducer from './properties/propertiesSlice';
import filtersReducer from './filters/filtersSlice';

const rootReducer = combineReducers({
  properties: propertiesReducer,
  filters: filtersReducer,
});

export default rootReducer;