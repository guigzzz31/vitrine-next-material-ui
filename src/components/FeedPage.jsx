import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import PageName from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import ContentGenerator from "../helpers/generators/ContentGenerator";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    marginBottom: 20,
  },
}));

export default function FeedPage(props) {
  const classes = useStyles();
  const { infoPage } = props;
  return (
    <Grid className={classes.root} container>
      <Grid item>
        <PageName pageName={infoPage.pageName} />
      </Grid>
      {infoPage.infoTip ? (
        <Grid item>
          <InfoTipGenerator infoTip={infoPage.infoTip} />
        </Grid>
      ) : null}
      {infoPage.content ? (
        <ContentGenerator content={infoPage.content} />
      ) : null}
    </Grid>
  );
}
