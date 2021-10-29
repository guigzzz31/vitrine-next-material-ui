import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

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
