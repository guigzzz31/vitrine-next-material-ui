import { makeStyles } from "@mui/styles";

import { Box } from "@mui/material";

import ParagraphGenerator from "../../generators/ParagraphGenerator";
import InfoTipHeader from "./InfoTipHeader";
import InfoTipFooter from "./InfoTipFooter";
import Paragraph from "../article/Paragraph";

const useStyles = makeStyles((theme) => ({
  container: {
    //width: "100%",
    backgroundColor: theme.palette.secondary.light,
    borderWidth: 1,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    boxShadow: "10px 10px 22px #c9c8c3, -10px -10px 24px #ffffff",
    maxWidth: "820px",
  },
}));

export default function InfoTip(props) {
  const { head, paragraph, bottom } = props.infoTip;
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      p={2}
      mx={4}
      width={"auto"}
      //width={["280px", "320px", "380px", "440px"]}
    >
      <Box pl={0.5}>
        <InfoTipHeader head={head} />
        <Box pl={2}>
          {paragraph
            ? paragraph.map((item) => {
                return (
                  <Paragraph
                    key={item.paragraph_id}
                    bold={item.bold}
                    primary={item.primary}
                    secondary={item.secondary}
                    infoTip
                  />
                );
              })
            : null}
        </Box>
        <InfoTipFooter bottom={bottom} />
      </Box>
    </Box>
  );
}
