import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat",
  },
}));

export default function CardName(props) {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        className={classes.title}
        color="primary"
        variant="h5"
        gutterBottom
      >
        {props.title}
      </Typography>
    </Box>
  );
}
