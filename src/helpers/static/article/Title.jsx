import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
