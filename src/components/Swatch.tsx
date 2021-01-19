import React, { FunctionComponent } from "react";

import { Grid, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

interface IRGBSwatch {
  red: number;
  green: number;
  blue: number;
}

interface IHSLSwatch {
  hue: number;
  saturation: number;
  lightness: number;
}

interface ISwatchContent {
  color: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: 100,
    },
    description: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export const RGBSwatch: FunctionComponent<IRGBSwatch> = ({ red, green, blue }) => {
  const value: string = `rgb(${red},${green},${blue})`;

  return <SwatchContent color={value} />;
};

export const HSLSwatch: FunctionComponent<IHSLSwatch> = ({ hue, saturation, lightness }) => {
  const value: string = `hsl(${hue},${saturation}%,${lightness}%)`;

  return <SwatchContent color={value} />;
};

const SwatchContent: FunctionComponent<ISwatchContent> = ({ color }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.description} xs={2}>
        <Typography variant="h6" gutterBottom>
          {color}
        </Typography>
      </Grid>
      <Grid item xs style={{ backgroundColor: color }} />
    </Grid>
  );
};
