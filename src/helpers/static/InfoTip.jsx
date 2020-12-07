import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import LightBulbIcon from "./LightBulbIcon";
import ParagraphGenerator from "../generators/ParagraphGenerator";

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
    <Box mx={2}>
      <Paper elevation={3}>
        <Box className={classes.root}>
          <LightBulbIcon />
          <Typography paragraph>{head}</Typography>
          <ParagraphGenerator paragraphs={paragraph} />
          <Typography paragraph>{bottom}</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
