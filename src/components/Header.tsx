import React, { FunctionComponent } from "react";

import { Typography, Paper, Button } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

interface IHeader {
  onClick: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: grey["900"],
      height: 200,
      position: "relative",
      padding: 20,
      borderRadius: 0,
    },
    title: {
      color: "white",
    },
    button: {
      position: "absolute",
      bottom: 30,
    },
  })
);

const Header: FunctionComponent<IHeader> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.title} variant="h3" gutterBottom>
        Color Swatch
      </Typography>

      <Button className={classes.button} variant="contained" color="primary" onClick={onClick}>
        Generate Color
      </Button>
    </Paper>
  );
};

export default Header;
