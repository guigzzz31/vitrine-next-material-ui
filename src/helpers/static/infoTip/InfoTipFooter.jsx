import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 1, 1),
    backgroundColor: theme.palette.background,
  },
}));

export default function InfoTipFooter(props) {
  const { bottom } = props;
  const classes = useStyles();
  return (
    <Box p={1}>
      <Typography color="primary">{bottom}</Typography>
    </Box>
  );
}
