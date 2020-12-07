import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import ParagraphGenerator from "../../generators/ParagraphGenerator";
import InfoTipHeader from "./InfoTipHeader";
import InfoTipFooter from "./InfoTipFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 1, 1),
    backgroundColor: theme.palette.background,
  },
}));

export default function InfoTip(props) {
  const { head, paragraph, bottom } = props.infoTip;
  const classes = useStyles();
  return (
    <Box mx={1}>
      <Paper elevation={2} square={false}>
        <Box className={classes.root}>
          <InfoTipHeader head={head} />
          <ParagraphGenerator paragraphs={paragraph} />
          <InfoTipFooter bottom={bottom} />
        </Box>
      </Paper>
    </Box>
  );
}
