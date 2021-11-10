import { makeStyles } from "@mui/styles";

import Grid from "@mui/material/Grid";

import PageName from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import CardGenerator from "../helpers/generators/CardGenerator";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 88,
    marginBottom: 20,
  },
}));

export default function FeedContact(props) {
  const classes = useStyles();
  const { infoPage } = props;
  // console.log("feedContact", infoPage);
  return (
    <Grid justify="center" className={classes.root} container>
      <Grid item>
        <PageName pageName={infoPage.pageName} />
      </Grid>
      {infoPage.infoTip ? (
        <Grid item>
          <InfoTipGenerator infoTip={infoPage.infoTip} />
        </Grid>
      ) : null}
      {infoPage.profil ? (
        <Grid item>
          <CardGenerator info={infoPage.profil} />
        </Grid>
      ) : null}
    </Grid>
  );
}
