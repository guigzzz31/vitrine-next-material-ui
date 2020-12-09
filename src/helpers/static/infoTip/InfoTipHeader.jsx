import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import LightBulbIcon from "../LightBulbIcon";

const useStyles = makeStyles((theme) => ({
  head: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "1.1rem",
  },
}));

export default function InfoTipHeader(props) {
  const { head } = props;
  const classes = useStyles();
  return (
    <Box p={1}>
      <Grid spacing={1} container>
        <Grid item>
          <LightBulbIcon />
        </Grid>
        <Grid item>
          <Typography className={classes.head} color="primary">
            {head}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
