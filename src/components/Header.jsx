import { makeStyles } from "@mui/styles";

import { Grid, Box, useMediaQuery } from "@mui/material";

import MenuMobile from "./MenuMobile";
import Logo from "../helpers/static/Logo";
import HeaderContent from "../helpers/static/HeaderContent";
import NewHeader from "./NewHeader";
import MenuDesktop from "./MenuDesktop";
import { useTabs } from "../contexts/context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    background: "rgb(255,253,247)",
    background:
      "linear-gradient(0deg, rgba(255,253,247,1) 2%, rgba(255,254,250,1) 36%, rgba(255,255,255,1) 68%)",
    zIndex: 1,
    boxShadow: "3px 9px 37px 32px #fffdf7",
  },
  container: {
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
  },
}));

export default function Header() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1060px)");

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Logo />
        {matches ? null : <HeaderContent />}
        {matches ? (
          <Box className={classes.menuContainer}>
            <NewHeader />
          </Box>
        ) : (
          <MenuMobile />
        )}
      </Box>
    </Box>
  );
}
