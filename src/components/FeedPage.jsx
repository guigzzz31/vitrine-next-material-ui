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
    justifyContent: "center",
    //backgroundColor: theme.palette.secondary.main
  },
}));

export default function FeedPage(props) {
  const classes = useStyles();
  const { infoPage } = props;
  const matches = useMediaQuery("(min-width:1460px)");
  console.log("mateches", matches);
  return (
    <Box className={classes.container}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: matches ? "row" : "column",
          justifyContent: matches ? "space-between" : "center",
        }}
      >
        {infoPage.definition ? (
          <Box flex={1}>
            <DefinitionGenerator definition={infoPage.definition} />
          </Box>
        ) : null}
        {infoPage.infoTip && infoPage.infoTip ? (
          <Box flex={1} justifySelf="center">
            <InfoTipGenerator infoTip={infoPage.infoTip} />
          </Box>
        ) : null}
      </Box>
      {infoPage.content ? (
        <Box>
          <ContentGenerator content={infoPage.content} />
        </Box>
      ) : null}
    </Box>
  );
}
