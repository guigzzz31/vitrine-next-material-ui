import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import PageName from "../helpers/generators/PageNameGenerator";
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
      {infoPage.users ? (
        <Grid item>
          <VisitCardGenerator users={infoPage.users} />
        </Grid>
      ) : null}
    </Grid>
  );
}
