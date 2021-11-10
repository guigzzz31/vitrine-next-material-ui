import { makeStyles } from "@mui/styles";

import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontFamily: "Roboto",
  },
}));

export default function Subtitle(props) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.subtitle}
      align="center"
      color="initial"
      gutterBottom
    >
      {props.subtitle}
    </Typography>
  );
}
