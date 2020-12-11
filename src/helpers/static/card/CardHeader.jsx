import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  head: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: "1.5rem",
  },
}));

export default function CardHeader(props) {
  const { head } = props;
  const classes = useStyles();
  return (
    <Box>
      <Grid spacing={1} container>
        <Grid item>
          <PersonIcon fontSize="large" color="primary" />
        </Grid>
        <Grid item>
          <Typography className={classes.head} color="primary">
            Coordonnées
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
