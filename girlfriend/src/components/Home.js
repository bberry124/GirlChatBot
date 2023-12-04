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
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user, setUser } = useAuth();
  console.log("TCL: Home -> user", user);
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleNavigate = () => {
    if (user?._id) {
      localStorage.removeItem("user");
      toast.success("Logout Success !");
      setUser({});
      return;
    }
    navigate("/login");
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: 5,
        }}
      >
        <Grid container spacing={3} sx={{ p: 0 }}>
          <Grid item lg={5} md={6} sm={6} xs={12} sx={{ mx: "auto" }}>
            <img
              src={title}
              alt="Title"
              style={{ width: "100%", height: "auto" }}
            />
            <div
              style={{
                margin: "0 auto",
                paddingRight: "20px",
                paddingTop: "2rem",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "calc(1vw + 1rem)",
                  mb: 3,
                  "@media (min-width: 768px)": {
                    fontSize: "19px",
                  },
                }}
              >
                Discover Bryce AI – Your Virtual Girlfriend
              </Typography>
              {/* <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
               
              </Link> */}
              <Box
                sx={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "Raleway",
                  textAlign: "center",
                  bgcolor: "#4B73FF",
                  p: 1,
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                onClick={() => handleNavigate()}
              >
                {user?._id ? "JOINED" : "JOIN"}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "calc(1vw + 1rem)",
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
          <Grid
            item
            lg={7}
            md={6}
            sm={6}
            xs={6}
            sx={{
              mx: "auto",
              "@media (max-width: 576px)": {
                display: "none",
              },
            }}
          >
            <img
              src={title_image}
              alt="Title Image"
              style={{
                width: "100%",
              }}
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
