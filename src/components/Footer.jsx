import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Copyright from "../helpers/static/Copyright";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    padding: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.footer}
    >
      <Grid item></Grid>
      <Grid item>
        <Box>
          <Copyright />
        </Box>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
