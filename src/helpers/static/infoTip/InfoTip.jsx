import { makeStyles } from "@mui/styles";

import { Box } from "@mui/material";

import ParagraphGenerator from "../../generators/ParagraphGenerator";
import InfoTipHeader from "./InfoTipHeader";
import InfoTipFooter from "./InfoTipFooter";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    borderWidth: 1,
    borderRadius: 10,
  },
}));

export default function InfoTip(props) {
  const { head, paragraph, bottom } = props.infoTip;
  const classes = useStyles();
  return (
    <Box className={classes.container} boxShadow={3} p={1}>
      <InfoTipHeader head={head} />
      <ParagraphGenerator paragraphs={paragraph} />
      <InfoTipFooter bottom={bottom} />
    </Box>
  );
}
