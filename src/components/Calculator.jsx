import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import Header from "./Header";

const Calculator = () => {
  const [output, setOutput] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get("fullName"),
      height: data.get("height"),
      weight: data.get("weight"),
    };

    //   console.log("gggggg", payload);
    const output =
      Number(payload.weight) / Math.pow(Number(payload.height) / 100, 2);

    setOutput(payload.name + " bmi is " + Number(output).toFixed(2));
  };

  return (
    <Fragment>
      <Header />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            BMI
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="FullName"
                  type={"text"}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="height"
                  label="Height"
                  name="height"
                  type={"number"}
                  placeholder={"in Centimeter "}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="weight"
                  label="Weight"
                  name="weight"
                  type={"number"}
                  placeholder={"in KG "}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>

            <Typography variant="h5" component={"div"}>
              {output}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Calculator;
