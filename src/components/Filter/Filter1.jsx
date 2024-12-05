import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const FilterComponent = () => {
  const [dateRange, setDateRange] = useState({
    from: null,
    to: null,
  });

  const [feedbackType, setFeedbackType] = useState({
    featureRequest: false,
    improvementSuggestion: true,
  });

  const [productLine, setProductLine] = useState({
    SME: false,
    digitalWealth: true,
  });

  const handleDateChange = (key, date) => {
    setDateRange((prev) => ({ ...prev, [key]: date }));
  };

  const handleCheckboxChange = (setFunction) => (event) => {
    setFunction((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  const applyFilters = () => {
    console.log("Applied Filters:", { dateRange, feedbackType, productLine });
  };

  const clearFilters = () => {
    setDateRange({ from: null, to: null });
    setFeedbackType({ featureRequest: false, improvementSuggestion: false });
    setProductLine({ SME: false, digitalWealth: false });
  };

  return (
    <Box
      sx={{
        padding: "16px",
        maxWidth: "300px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      {/* Date Range */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Date Range</Typography>
          <DatePicker
            label="From"
            value={dateRange.from}
            onChange={(date) => handleDateChange("from", date)}
            renderInput={(params) => (
              <TextField {...params} fullWidth sx={{ mt: 1 }} />
            )}
          />
          <DatePicker
            label="To"
            value={dateRange.to}
            onChange={(date) => handleDateChange("to", date)}
            renderInput={(params) => (
              <TextField {...params} fullWidth sx={{ mt: 2 }} />
            )}
          />
        </Box>
      </LocalizationProvider>

      {/* Feedback Type */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">Feedback Type</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={feedbackType.featureRequest}
                onChange={handleCheckboxChange(setFeedbackType)}
                name="featureRequest"
              />
            }
            label="Feature Request"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={feedbackType.improvementSuggestion}
                onChange={handleCheckboxChange(setFeedbackType)}
                name="improvementSuggestion"
              />
            }
            label="Improvement Suggestion"
          />
        </FormGroup>
      </Box>

      {/* Product Line */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">Product Line</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={productLine.SME}
                onChange={handleCheckboxChange(setProductLine)}
                name="SME"
              />
            }
            label="SME"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={productLine.digitalWealth}
                onChange={handleCheckboxChange(setProductLine)}
                name="digitalWealth"
              />
            }
            label="Digital Wealth"
          />
        </FormGroup>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button color="primary" onClick={clearFilters}>
          Clear Filters
        </Button>
        <Button variant="contained" color="primary" onClick={applyFilters}>
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default FilterComponent;
