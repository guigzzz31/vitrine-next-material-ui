import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  pageName: {
    fontFamily: "Montserrat",
  },
}));

export default function PageNameGenerator(props) {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        className={classes.pageName}
        align="center"
        color="textPrimary"
        variant="h4"
        gutterBottom
      >
        {props.pageName}
      </Typography>
    </Box>
  );
}
