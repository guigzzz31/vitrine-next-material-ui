import { makeStyles } from "@mui/styles";

import { Grid, useMediaQuery } from "@mui/material";

import PageNameGenerator from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import CardGenerator from "../helpers/generators/CardGenerator";
import VisitCardGenerator from "../helpers/generators/VisitCardGenerator";
import ScheduleGenerator from "../helpers/generators/ScheduleGenerator";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 88,
    marginBottom: 20,
  },
}));

export default function FeedContact(props) {
  const classes = useStyles();
  const { infoPage } = props;
  const matches = useMediaQuery("(max-width:1060px)");

  return (
    <Grid justify="center" className={classes.root} container>
      <Grid item>
        {matches ? <PageNameGenerator pageName={infoPage.pageName} /> : null}
      </Grid>
      {infoPage.infoTip ? (
        <Grid item>
          <InfoTipGenerator infoTip={infoPage.infoTip} />
        </Grid>
      ) : null}
      {infoPage.users ? (
        <Grid item>
          <VisitCardGenerator users={infoPage.users} />
        </Grid>
      ) : null}
      {infoPage.schedule ? (
        <ScheduleGenerator schedule={infoPage.schedule} />
      ) : null}
      {infoPage.profil ? (
        <Grid item>
          <CardGenerator info={infoPage.profil} />
        </Grid>
      ) : null}
    </Grid>
  );
}
