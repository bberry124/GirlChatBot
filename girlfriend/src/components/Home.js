import React from "react";
import {
  Box,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import JoinForm from "./JoinForm";
import ChatBot from "./ChatBot";
import title from "../assets/title.png";
import title_image from "../assets/title_image.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container spacing={3} sx={{ p: 0 }}>
          <Grid item lg={5} md={6} sm={6} xs={8} sx={{ mx: "auto" }}>
            <img
              src={title}
              alt="Title"
              style={{ width: "100%", height: "auto" }}
            />
            <div
              style={{ width: "80%", paddingRight: "20px", paddingTop: "2rem" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "calc(1vw + 1rem)",
                  textAlign: "center",
                  mb: 3,
                  "@media (min-width: 768px)": {
                    fontSize: "19px",
                  },
                }}
              >
                Discover Bryce AI – Your Virtual Girlfriend
              </Typography>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Raleway",
                    textAlign: "center",
                    bgcolor: "#4B73FF",
                    p: 1,
                  }}
                >
                  JOIN
                </Box>
              </Link>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "calc(1vw + 1rem)",
                  textAlign: "center",
                  mt: 3,
                  "@media (min-width: 768px)": {
                    fontSize: "19px",
                  },
                }}
              >
                Read about the recent Banter Acquisition
              </Typography>
            </div>
          </Grid>
          <Grid item lg={7} md={6} sm={6} xs={8} sx={{ mx: "auto" }}>
            <img
              src={title_image}
              alt="Title Image"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <JoinForm />
        <ChatBot />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
