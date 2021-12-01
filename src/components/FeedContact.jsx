import { makeStyles } from "@mui/styles";

import { Box, Grid, useMediaQuery } from "@mui/material";

import PageNameGenerator from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import CardGenerator from "../helpers/generators/CardGenerator";
import VisitCardGenerator from "../helpers/generators/VisitCardGenerator";
import ScheduleGenerator from "../helpers/generators/ScheduleGenerator";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 88,
    marginBottom: 20,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function FeedContact(props) {
  const classes = useStyles();
  const { infoPage } = props;
  const matches = useMediaQuery("(max-width:1060px)");

  return (
    <Box className={classes.container}>
      {matches ? <PageNameGenerator pageName={infoPage.pageName} /> : null}
      {infoPage.infoTip ? (
        <Grid item>
          <InfoTipGenerator infoTip={infoPage.infoTip} />
        </Grid>
      ) : null}
      {infoPage.users ? <VisitCardGenerator users={infoPage.users} /> : null}
      {infoPage.schedule ? (
        <ScheduleGenerator schedule={infoPage.schedule} />
      ) : null}
      {infoPage.profil ? <CardGenerator info={infoPage.profil} /> : null}
    </Box>
  );
}
