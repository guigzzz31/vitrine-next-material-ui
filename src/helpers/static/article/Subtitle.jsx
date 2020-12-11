import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

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
