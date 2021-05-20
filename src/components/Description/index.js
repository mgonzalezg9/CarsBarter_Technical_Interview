import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";

const Description = ({ name, imageSrc, description }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <Typography variant="h3" color="initial">
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
        <img src={`https:${imageSrc}`} alt="" width={matches ? "60%" : "40%"} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="initial">{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default Description;
