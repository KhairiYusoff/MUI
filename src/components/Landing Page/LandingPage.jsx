import React from "react";
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

const LandingPage = () => {
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
            opacity: 0.5, // Adjust the opacity here
            zIndex: -1,
          },
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Find Your Dream Home
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </Typography>

        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button variant="contained" color="primary">
            Rent
          </Button>
          <Button
            variant="outlined"
            sx={{ backgroundColor: "white", color: "primary.main" }}
          >
            Sale
          </Button>
        </Box>

        <Container
          maxWidth="md"
          sx={{ mt: 4, backgroundColor: "white", borderRadius: 2, p: 2 }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField select label="Locations" fullWidth defaultValue="">
              <MenuItem value="">Select your city</MenuItem>
              {/* Add city options here */}
            </TextField>
            <TextField select label="Property Type" fullWidth defaultValue="">
              <MenuItem value="">Select property type</MenuItem>
              {/* Add property type options here */}
            </TextField>
            <TextField select label="Rent Range" fullWidth defaultValue="">
              <MenuItem value="">Select rent range</MenuItem>
              {/* Add rent range options here */}
            </TextField>
            <Button variant="contained" color="primary" sx={{ px: 4 }}>
              Search
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
