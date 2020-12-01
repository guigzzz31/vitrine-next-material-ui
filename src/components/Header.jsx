import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Menu from "../helpers/Menu";
import Logo from "../helpers/Logo";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#4a8e89",
    padding: 0,
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
          {/* <Typography
            color="textSecondary"
            variant="h6"
            component="h1"
            align="center"
            gutterBottom
          >
            Carole Richou <br />&<br /> Carine Da Costa
          </Typography>{" "} */}
          <Typography
            color="textSecondary"
            variant="h6"
            component="h1"
            align="center"
            gutterBottom
          >
            Podologie - Cugnaux
          </Typography>{" "}
          {/* <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Pédicure Podologue - Cugnaux
          </Typography> */}
          <Typography
            variant="h6"
            component="h1"
            align="center"
            color="textSecondary"
            gutterBottom
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
