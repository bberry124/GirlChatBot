import { Box, Button, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import logo_white from "../assets/logo_white.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      style={{
        alignContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        gap: 24,
        height: 80,
        justifyContent: "center",
        padding: 24,
        position:'relative',
        zIndex:9999
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flex: "1 0 0px",
          flexDirection: "row",
          flexWrap: "nowrap",
          height: "min-content",
          justifyContent: "space-between",
          overflow: "visible",
          padding: 0,
          position: "relative",
          width: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <div>
              <img
                alt=""
                style={{
                  width: "5rem ",
                  margin: "1rem 0rem",
                  padding: "0rem 1rem",
                }}
                src={logo_white}
              />
            </div>
          </Link>
          <Typography variant="h4" component="h2" sx={{ margin: "0rem 1rem" }}>
            Bryce.ai
          </Typography>
        </div>
      </div>
      <Box
        sx={{
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        <Link to="/subscription">
          <Typography
            variant="h6"
            component="h6"
            sx={{ margin: "0rem 1rem", color: "white" }}
          >
            Press
          </Typography>
        </Link>
      </Box>
      {/* <Box
        sx={{
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        <Link to="create-cost">
          <Typography variant="h6" component="h6" sx={{ color: "white" }}>
            Create Cost
          </Typography>
        </Link>
      </Box> */}
    </div>
  );
};
export default Header;
