import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  bottom: {
    fontFamily: "Montserrat",
    fontSize: "1.1rem",
    fontWeight: 500,
  },
}));

export default function InfoTipFooter(props) {
  const { bottom } = props;
  const classes = useStyles();
  return (
    <Box p={1}>
      <Typography className={classes.bottom} color="primary">
        {bottom}
      </Typography>
    </Box>
  );
}
