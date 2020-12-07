import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
  },
}));

export default function HeaderContent() {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        color="secondary"
        variant="h6"
        align="center"
        className={classes.title}
      >
        Pédicurie - Podologie
      </Typography>
      <Typography
        color="secondary"
        variant="body1"
        align="center"
        className={classes.title}
      >
        Cugnaux
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="secondary"
        className={classes.title}
      >
        05 34 57 10 41
      </Typography>
    </Box>
  );
}
