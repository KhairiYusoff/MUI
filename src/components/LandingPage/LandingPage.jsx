import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import {
  setLocation,
  setPropertyType,
  setRentRange,
  setSaleType,
  selectFilters,
} from "../../redux/filters/filtersSlice";
import { fetchProperties } from "../../redux/properties/propertiesActions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSearch = () => {
    dispatch(fetchProperties());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <HomeIcon sx={{ mr: 1 }} />
            REIS Real Estate
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {[
              "HOME",
              "ABOUT US",
              "OUR AGENTS",
              "PROPERTIES",
              "GALLERY",
              "BLOG",
              "CONTACT US",
              "SEARCH",
            ].map((item) => (
              <Button key={item} sx={{ color: "inherit" }}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1681748777410-71e6510de13d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
            zIndex: -1,
          },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: 1.2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            mb: 3,
            maxWidth: "80%",
          }}
        >
          Discover properties tailored to your needs. Find your next home
          effortlessly.
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontSize: "1.1rem",
            fontWeight: 400,
            lineHeight: 1.6,
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            mb: 4,
            maxWidth: "70%",
          }}
        >
          Explore a wide range of properties tailored to your lifestyle. Whether
          you're looking for a cozy apartment or a spacious family home, we make
          finding your dream property easy and hassle-free.
        </Typography>

        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button
            variant={filters.saleType === "rent" ? "contained" : "outlined"}
            color="primary"
            onClick={() => dispatch(setSaleType("rent"))}
          >
            Rent
          </Button>
          <Button
            variant={filters.saleType === "sale" ? "contained" : "outlined"}
            sx={{
              backgroundColor:
                filters.saleType === "sale" ? "primary.main" : "white",
              color: filters.saleType === "sale" ? "white" : "primary.main",
            }}
            onClick={() => dispatch(setSaleType("sale"))}
          >
            Sale
          </Button>
        </Box>

        <Container
          maxWidth="md"
          sx={{ mt: 4, backgroundColor: "white", borderRadius: 2, p: 2 }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField 
              select 
              label="Locations" 
              fullWidth 
              value={filters.location}
              onChange={(e) => dispatch(setLocation(e.target.value))}
            >
              <MenuItem value="">Select your city</MenuItem>
              <MenuItem value="new-york">New York</MenuItem>
              <MenuItem value="los-angeles">Los Angeles</MenuItem>
              <MenuItem value="chicago">Chicago</MenuItem>
              <MenuItem value="houston">Houston</MenuItem>
              <MenuItem value="miami">Miami</MenuItem>
              <MenuItem value="san-francisco">San Francisco</MenuItem>
            </TextField>
            <TextField 
              select 
              label="Property Type" 
              fullWidth 
              value={filters.propertyType}
              onChange={(e) => dispatch(setPropertyType(e.target.value))}
            >
              <MenuItem value="">Select property type</MenuItem>
              <MenuItem value="apartment">Apartment</MenuItem>
              <MenuItem value="house">House</MenuItem>
              <MenuItem value="condo">Condo</MenuItem>
              <MenuItem value="townhouse">Townhouse</MenuItem>
              <MenuItem value="studio">Studio</MenuItem>
              <MenuItem value="duplex">Duplex</MenuItem>
            </TextField>
            <TextField 
              select 
              label="Rent Range" 
              fullWidth 
              value={filters.rentRange}
              onChange={(e) => dispatch(setRentRange(e.target.value))}
            >
              <MenuItem value="">Select rent range</MenuItem>
              <MenuItem value="0-1000">$0 - $1,000</MenuItem>
              <MenuItem value="1000-2000">$1,000 - $2,000</MenuItem>
              <MenuItem value="2000-3000">$2,000 - $3,000</MenuItem>
              <MenuItem value="3000-4000">$3,000 - $4,000</MenuItem>
              <MenuItem value="4000-5000">$4,000 - $5,000</MenuItem>
              <MenuItem value="5000+">$5,000+</MenuItem>
            </TextField>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ px: 8 }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
