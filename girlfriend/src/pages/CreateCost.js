import { Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import titleImage from "../assets/title_image.png";
import { toast } from "react-toastify";

const CreateCost = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_LOCAL}cost`, { ...data })
      .then((result) => {
        if (result.status === 200) {
          toast.success("Success!");
          navigate("/subscription");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={6} md={8} sm={8} xs={8} sx={{ mx: "auto" }}>
            <Stack spacing={6}>
              <Stack direction={"row"} justifyContent={"center"}>
                <Typography variant="h4">Create Cost</Typography>
              </Stack>
              <TextField
                id="title"
                name="title"
                onChange={(event) =>
                  setData({
                    ...data,
                    title: event.target.value,
                  })
                }
                label="Title"
                variant="outlined"
                size="small"
              />
              <TextField
                id="cost"
                name="cost"
                onChange={(event) =>
                  setData({
                    ...data,
                    cost: event.target.value,
                  })
                }
                label="Cost"
                variant="outlined"
                size="small"
              />
              <TextField
                id="min"
                name="min"
                onChange={(event) =>
                  setData({
                    ...data,
                    min: event.target.value,
                  })
                }
                label="Min"
                variant="outlined"
                size="small"
              />
              <TextField
                id="color"
                name="color"
                onChange={(event) =>
                  setData({
                    ...data,
                    color: event.target.value,
                  })
                }
                label="Color"
                variant="outlined"
                size="small"
              />

              <Button
                type="submit"
                variant="contained"
                size="small"
                sx={{ fontSize: "20px" }}
              >
                Create
              </Button>
            </Stack>
          </Grid>
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
        </Grid>
      </form>
    </Stack>
  );
};

export default CreateCost;
