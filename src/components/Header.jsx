import { makeStyles } from "@mui/styles";

import Grid from "@mui/material/Grid";

import Menu from "./Menu";
import Logo from "../helpers/static/Logo";
import HeaderContent from "../helpers/static/HeaderContent";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid xs item>
        <Logo />
      </Grid>
      <Grid item>
        <HeaderContent />
      </Grid>
      <Grid item>
        <Menu />
      </Grid>
    </Grid>
  );
}
