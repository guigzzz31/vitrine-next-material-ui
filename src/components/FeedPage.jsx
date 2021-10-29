import { makeStyles } from "@mui/styles";

import Grid from "@mui/material/Grid";

import PageNameGenerator from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import ContentGenerator from "../helpers/generators/ContentGenerator";
import DefinitionGenerator from "../helpers/generators/DefinitionGenerator";
import Scroll from "../helpers/ScrollToTop";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 88,
    marginBottom: 20,
  },
}));

export default function FeedPage(props) {
  const classes = useStyles();
  const { infoPage } = props;
  return (
    <Grid className={classes.root} container>
      <Grid item>
        <PageNameGenerator pageName={infoPage.pageName} />
      </Grid>
      <Grid item>
        <Scroll showBelow={250} />
      </Grid>
      {infoPage.infoTip ? (
        <Grid item>
          <InfoTipGenerator infoTip={infoPage.infoTip} />
        </Grid>
      ) : null}
      {infoPage.definition ? (
        <Grid item>
          <DefinitionGenerator definition={infoPage.definition} />
        </Grid>
      ) : null}
      {infoPage.content ? (
        <ContentGenerator content={infoPage.content} />
      ) : null}
      <Grid item>
        <Scroll showBelow={200} />
      </Grid>
    </Grid>
  );
}
