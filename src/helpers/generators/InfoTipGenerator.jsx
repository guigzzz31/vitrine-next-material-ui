import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import ParagraphGenerator from "./ParagraphGenerator";

function LightBulbIcon(props) {
  return (
    <SvgIcon color="primary" {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 1, 1),
  },
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
}));

export default function InfoTipGenerator(props) {
  const { infoTip } = props;
  console.log("infoTip", infoTip);
  const classes = useStyles();
  return (
    <Box mx={2}>
      <Paper elevation={3} square>
        <Typography color="primary" className={classes.root}>
          <LightBulbIcon className={classes.lightBulb} />
          {infoTip.head}
          <Typography paragraph></Typography>
          {/* {infoTip.paragraph
            ? infoTip.paragraph.map((item) => {
                return (
                  <Typography
                    key={item.paragraph_id}
                    color="textPrimary"
                    paragraph
                  >
                    {item.primary}
                  </Typography>
                );
              })
            : null} */}
          <ParagraphGenerator paragraphs={infoTip.paragraph} />
          {infoTip.bottom}
        </Typography>
      </Paper>
    </Box>
  );
}