import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
    color: theme.palette.secondary.main,
  },
}));

export default function HeaderContent() {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        //color="secondary"
        variant="h6"
        align="center"
        className={classes.title}
      >
        Pédicurie - Podologie
      </Typography>
      <Typography
        //color="secondary"
        variant="body1"
        align="center"
        className={classes.title}
      >
        Cugnaux
      </Typography>
      <Typography
        //color="secondary"
        variant="h6"
        align="center"
        className={classes.title}
      >
        05 34 57 10 41
      </Typography>
    </Box>
  );
}
