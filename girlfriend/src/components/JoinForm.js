import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const JoinForm = () => {
  return (
    <Box sx={{}}>
      <p className="font_raleway font-36 center bold">Join BryceAI</p>
      <p
        className="font_raleway font-20 center"
        style={{ color: "#858585", letterSpacing: "1px" }}
      >
        Caryn AI is at capacity, but we're accepting users on a rolling basis.
        Join our Waitlist!
      </p>
      <Grid
        spacing={3}
        sx={{
          marginBottom: "3rem",
        }}
      >
        <Grid item xs={6} style={{ padding: 0, margin: "10px 0" }}>
          <TextField placeholder="Name" fullWidth />
        </Grid>
        <Grid item xs={6} style={{ padding: 0, margin: "10px 0" }}>
          <TextField placeholder="Email" fullWidth />
        </Grid>
        <Grid item xs={12} style={{ padding: 0, margin: "10px 0" }}>
          <TextField placeholder="Message" fullWidth />
        </Grid>
        <div
          className="button font_raleway center font-20"
          style={{
            padding: "0.7rem 0",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          Send
        </div>
      </Grid>
    </Box>
  );
};
export default JoinForm;
