import { makeStyles } from "@mui/styles";

import { Box } from "@mui/material";
import InfoTip from "../static/infoTip/InfoTip";

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
