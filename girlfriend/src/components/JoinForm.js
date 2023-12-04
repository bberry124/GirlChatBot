import { Box, Button, Grid, TextField } from "@mui/material";
import MinHeightTextarea from "./Textarea";

const JoinForm = () => {

  return (
    <section className="join-container">
      <div className="join-bryce">
        <h2>Join Bryce</h2>
      </div>
      <div className="join-bryce-text">
        <h2>
          Caryn AI is at capacity, but we're accepting users on a rolling basis.
          Join our Waitlist!
        </h2>
      </div>
      <div className="join-bryce">
        <Grid
          container
          spacing={3}
          sx={{
            marginBottom: "3rem",
          }}
        >
          <Grid item xs={6}>
            <TextField placeholder="Name" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField placeholder="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <MinHeightTextarea minRows={6} placeholder="Message" />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="button font_raleway center font-20"
              style={{
                color: "white",
                padding: "0.7rem 0",
                borderRadius: "8px",
                width: "100%",
                backgroundColor: "rgb(34, 34, 34)",
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
export default JoinForm;
