import { makeStyles } from "@mui/styles";

import { Box } from "@mui/material";

import ParagraphGenerator from "../../generators/ParagraphGenerator";
import InfoTipHeader from "./InfoTipHeader";
import InfoTipFooter from "./InfoTipFooter";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    borderWidth: 1,
    borderRadius: 25,
    ///boxShadow: "20px 20px 60px #d9d7d2, -20px -20px 60px #ffffff",
    boxShadow: "14px 14px 28px #bebebe,-14px -14px 28px #ffffff",
    //maxWidth: "320px",
  },
}));

export default function InfoTip(props) {
  const { head, paragraph, bottom } = props.infoTip;
  const classes = useStyles();
  return (
    <Box className={classes.container} p={1}>
      <InfoTipHeader head={head} />
      <ParagraphGenerator paragraphs={paragraph} />
      <InfoTipFooter bottom={bottom} />
    </Box>
  );
}
