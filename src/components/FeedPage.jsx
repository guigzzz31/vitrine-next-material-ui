import { makeStyles } from "@mui/styles";

import { Grid, Box, useMediaQuery } from "@mui/material";

import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import ContentGenerator from "../helpers/generators/ContentGenerator";
import DefinitionGenerator from "../helpers/generators/DefinitionGenerator";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 88,
    marginBottom: 40,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    //justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: theme.palette.secondary.main
  },
}));

export default function FeedPage(props) {
  const classes = useStyles();
  const { infoPage } = props;

  return (
    <Box className={classes.container}>
      {infoPage.definition ? (
        <DefinitionGenerator definition={infoPage.definition} />
      ) : null}
      {infoPage.infoTip && infoPage.infoTip ? (
        <Box alignSelf="center">
          <InfoTipGenerator infoTip={infoPage.infoTip} />
        </Box>
      ) : null}
      {infoPage.content ? (
        <ContentGenerator content={infoPage.content} />
      ) : null}
    </Box>
  );
}
