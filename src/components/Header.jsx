import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Menu from "./Menu";
import Logo from "../helpers/static/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    backgroundColor: theme.palette.primary.main,
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
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <Box>
          <Typography
            color="secondary"
            variant="h6"
            component="h1"
            align="center"
          >
            Pédicurie - Podologie
          </Typography>
          <Typography
            color="secondary"
            variant="body1"
            component="h1"
            align="center"
          >
            Cugnaux
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            align="center"
            color="secondary"
          >
            05 34 57 10 41
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Menu />
      </Grid>
    </Grid>
  );
}
