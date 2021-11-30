import { makeStyles } from "@mui/styles";

import { Grid, useMediaQuery } from "@mui/material";

import PageNameGenerator from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import VisitCardGenerator from "../helpers/generators/VisitCardGenerator";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 88,
    marginBottom: 20,
  },
}));

export default function FeedIndex(props) {
  const classes = useStyles();
  const { infoPage } = props;

  const matches = useMediaQuery("(max-width:1060px)");

  return (
    <Grid justify="center" className={classes.root} container>
      <Grid item>
        {matches ? <PageNameGenerator pageName={infoPage.pageName} /> : null}
      </Grid>
      {/* infoTip est le bandeau informatif en haut de page */}
      {infoPage.infoTip ? (
        <Grid item>
          <InfoTipGenerator infoTip={infoPage.infoTip} />
        </Grid>
      ) : null}
      {/* VisitCardGenerator est le composant responsable de générer les cartes de visite */}
      {infoPage.users ? (
        <Grid item>
          <VisitCardGenerator users={infoPage.users} />
        </Grid>
      ) : null}
    </Grid>
  );
}
