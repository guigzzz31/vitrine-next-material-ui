import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import InfoTip from "../static/InfoTip";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 1, 1),
  },
}));

export default function InfoTipGenerator(props) {
  const { infoTip } = props;
  const classes = useStyles();
  return (
    <Box mx={2}>
      <InfoTip infoTip={infoTip} />
    </Box>
  );
}
