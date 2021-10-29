import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
  },
}));

export default function Title(props) {
  const classes = useStyles();
  return (
    <Typography className={classes.title} color={props.title === "Carole Richou" ? "primary" : "error"} variant="h5">
      {props.title}
    </Typography>
  );
}
