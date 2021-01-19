import React, { useState, useEffect, FunctionComponent } from "react";
import { observer } from "mobx-react";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { useColorsStore } from "hooks/useStores";
import Header from "components/Header";

interface IHeaderContainer {}

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const HeaderContainer: FunctionComponent<IHeaderContainer> = observer(() => {
  const classes = useStyles();
  const { fetchColors } = useColorsStore();

  useEffect(() => {
    fetchColors();
  }, []);

  return <Header onClick={fetchColors} />;
});

export default HeaderContainer;
