import { Box, Grid, Typography } from "@mui/material";
import logo_white from "../assets/logo_white.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      sx={{
        padding: "40px 0px",
      }}
    >
      <hr />
      <Box
        sx={{
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: 24,
          justifyContent: "center",
          "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <img
            alt=""
            style={{
              width: "5rem ",
              margin: "1rem 0rem",
              padding: "0rem 1rem",
            }}
            src={logo_white}
          />
          <Typography variant="h4" component="h2" sx={{ margin: "0rem 1rem" }}>
            Bryce.ai
          </Typography>
        </Box>

        <Box
          sx={{
            padding:'20px 0'
          }}
        >
          <div></div>
          <div>
            <Link to="/subscription">
              <Typography
                variant="h6"
                component="h6"
                sx={{ margin: "0rem 2rem", color: "white" }}
              >
                Subscription
              </Typography>
            </Link>
          </div>
          <Box>
            <Link to="create-cost">
              <Typography
                variant="h6"
                component="h6"
                sx={{ margin: "0rem 2rem", color: "white" }}
              >
                Create Cost
              </Typography>
            </Link>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h6" component="h2">
          powered by TLK.com
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
