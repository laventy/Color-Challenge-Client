import React, { FunctionComponent } from "react";

import { Grid, CircularProgress } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { RGBSwatch, HSLSwatch } from "components/Swatch";

interface ISwatches {
  colors: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    progressContainer: {
      padding: 10,
      textAlign: "center",
    },
  })
);

const Swatches: FunctionComponent<ISwatches> = ({ colors }) => {
  const classes = useStyles();

  if (colors.length === 0) {
    return (
      <Grid className={classes.progressContainer}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <div className={classes.container}>
      {colors.map((color: { type: string; red: number; green: number; blue: number; hue: number; saturation: number; lightness: number }, index: number) =>
        color.type === "rgb" ? (
          <RGBSwatch key={index} red={color.red} green={color.green} blue={color.blue} />
        ) : color.type === "hsl" ? (
          <HSLSwatch key={index} hue={color.hue} saturation={color.saturation} lightness={color.lightness} />
        ) : null
      )}
    </div>
  );
};

export default Swatches;
