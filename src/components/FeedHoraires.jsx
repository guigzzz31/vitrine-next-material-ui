import { makeStyles } from "@mui/styles";

import { Box, collapseClasses, Grid, useMediaQuery } from "@mui/material";

import PageNameGenerator from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import ContentGenerator from "../helpers/generators/ContentGenerator";
import ScheduleGenerator from "../helpers/generators/ScheduleGenerator";
import VisitCardGenerator from "../helpers/generators/VisitCardGenerator";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 88,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    alignSelf: "flex-start",
    //width: "100%",
  },

  carole: {
    color: "#6200B3",
  },
  carine: {
    color: "#E06C9F",
  },
}));

export default function FeedHoraires(props) {
  const classes = useStyles();
  const { infoPage } = props;
  const matches = useMediaQuery("(max-width:1060px)");

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        {matches ? <PageNameGenerator pageName={infoPage.pageName} /> : null}
      </Box>
      {infoPage.infoTip ? (
        <InfoTipGenerator infoTip={infoPage.infoTip} />
      ) : null}

      {infoPage.schedule ? (
        <ScheduleGenerator schedule={infoPage.schedule} />
      ) : null}
      {infoPage.users ? <VisitCardGenerator users={infoPage.users} /> : null}
    </Box>
  );
}
