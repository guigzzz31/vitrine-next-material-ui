import { makeStyles } from "@mui/styles";

import { Grid, Box, useMediaQuery } from "@mui/material";

import Menu from "./Menu";
import Logo from "../helpers/static/Logo";
import HeaderContent from "../helpers/static/HeaderContent";
import MenuDesktop from "./MenuDesktop";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
  },
  mobileContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  desktopContainer: {},
}));

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1060px)");
  console.log("matches", matches);
  return (
    <Box className={classes.root}>
      <Box className={classes.mobileContainer}>
        <Logo />
        <HeaderContent />
        {matches ? <MenuDesktop /> : <Menu />}
      </Box>
    </Box>
  );
}
