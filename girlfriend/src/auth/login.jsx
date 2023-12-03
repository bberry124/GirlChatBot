import React, { useCallback, useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Stack, TextField, Typography } from "@mui/material";
import titleImage from "../assets/title_image.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
				console.log("TCL: handleSubmit -> result", result)
        if (result.status === 200) {
          localStorage.setItem("user", JSON.stringify(result.data.user));
          toast.success("Login success");
          navigate("/subscription");
          return;
        }
      })
      .catch((err) => {
        toast.error("Login failed");
      });
  };

  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={8}
            sx={{
              mx: "auto",
              "@media (max-width: 768px)": {
                display: "none",
              },
            }}
          >
            <img
              style={{
                width: "100%",
                maxWidth: 700,
              }}
              src={titleImage}
              alt="main img"
            />
          </Grid>
          <Grid item lg={6} md={8} sm={8} xs={8} sx={{ mx: "auto" }}>
            <Stack spacing={6}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Typography variant="h4">Log In</Typography>
              </Stack>
              <TextField
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                label="Email"
                variant="outlined"
                size="small"
              />
              <TextField
                type="password"
                id="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                label="Password"
                variant="outlined"
                size="small"
              />
              <Button
                type="submit"
                variant="contained"
                size="small"
                sx={{ fontSize: "20px" }}
              >
                Log In
              </Button>
              <Stack direction={"row"} justifyContent={"center"}>
                <Typography sx={{ pr: 1 }}>
                  If you haven't Registered yet?
                </Typography>
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  <Typography color={"primary"}> Register Now </Typography>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Stack>
  );
}
