import { makeStyles } from "@mui/styles";

import { Grid, Box, useMediaQuery } from "@mui/material";

import Menu from "./Menu";
import Logo from "../helpers/static/Logo";
import HeaderContent from "../helpers/static/HeaderContent";
import MenuDesktop from "./MenuDesktop";

import { useTabs } from "../contexts/context";

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
  desktopContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuContainer: {
    alignSelf: "flex-end",
    //backgroundColor: "red",
  },
}));

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1060px)");

  const { currentTab, setCurrentTab } = useTabs();

  //console.log("context in header", currentTab);

  return (
    <Box className={classes.root}>
      <Box
        className={matches ? classes.desktopContainer : classes.mobileContainer}
      >
        <Logo />
        {matches ? null : <HeaderContent />}
        {matches ? (
          <Box className={classes.menuContainer}>
            <MenuDesktop />
          </Box>
        ) : (
          <Menu />
        )}
      </Box>
    </Box>
  );
}
