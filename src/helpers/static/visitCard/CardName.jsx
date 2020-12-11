import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
    fontWeight: 600,
  },
  divider: {
    backgroundColor: theme.palette.error.main,
    height: 3,
    width: 120,
    marginBottom: 10,
    boxShadow: "rgb(218, 98, 125) 0px 8px 27px 1px",
  },
}));

export default function CardName(props) {
  const classes = useStyles();
  return (
    <Box mb={2}>
      <Grid direction="column" justify="center" alignItems="center" container>
        <Typography
          align="center"
          className={classes.title}
          color="textPrimary"
          variant="h5"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Box className={classes.divider}></Box>
      </Grid>
    </Box>
  );
}
