import { makeStyles } from "@mui/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Montserrat",
    color: theme.palette.secondary.main,
  },
}));

export default function HeaderContent() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1060px)");
  return (
    <Box className={classes.container}>
      <Typography variant="h6" align="center" className={classes.title}>
        Pédicurie - Podologie
      </Typography>
      {matches ? null : (
        <Typography variant="body1" align="center" className={classes.title}>
          Cugnaux
        </Typography>
      )}
      <Typography
        variant={!matches ? "h6" : "body1"}
        align="center"
        className={classes.title}
      >
        {!matches ? null : "Cugnaux - "} 05 34 57 10 41
      </Typography>
    </Box>
  );
}
