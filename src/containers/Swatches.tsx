import React, { useState, useEffect, FunctionComponent } from "react";
import { observer } from "mobx-react";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { useColorsStore } from "hooks/useStores";
import Swatches from "components/Swatches";

interface ISwatchesContainer {}

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const SwatchesContainer: FunctionComponent<ISwatchesContainer> = observer(() => {
  const classes = useStyles();
  const { fetchColors, colors } = useColorsStore();

  useEffect(() => {
    fetchColors();
  }, []);

  return <Swatches colors={colors} />;
});

export default SwatchesContainer;
