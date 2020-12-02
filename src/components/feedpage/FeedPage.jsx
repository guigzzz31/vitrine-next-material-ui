import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import PageName from "./PageName";
import Definition from "./Definition";
import Troubles from "./Troubles";
import Solutions from "./Solutions";
import ProTip from "../../helpers/ProTip";

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
      {infoPage.infoBulle ? (
        <Grid item>
          <ProTip info={infoPage.infoBulle} />
        </Grid>
      ) : null}
      <Grid item>
        {infoPage.content.part1.paragraph ? (
          <Definition definition={infoPage.content.part1.paragraph} />
        ) : null}
      </Grid>
      <Grid item>
        <Troubles items={infoPage.content.part2.reasons} />
      </Grid>
      <Grid item>
        <Solutions solutions={infoPage.content.part2.solutions} />
      </Grid>
    </Grid>
  );
}
