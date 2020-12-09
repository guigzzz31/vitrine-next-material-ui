import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import PageNameGenerator from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import ContentGenerator from "../helpers/generators/ContentGenerator";
import ScheduleGenerator from "../helpers/generators/ScheduleGenerator";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 88,
    marginBottom: 20,
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
  return (
    <Grid className={classes.root} container>
      <Grid item>
        <PageNameGenerator pageName={infoPage.pageName} />
      </Grid>
      {infoPage.infoTip ? (
        <Grid item>
          <InfoTipGenerator infoTip={infoPage.infoTip} />
        </Grid>
      ) : null}
      {infoPage.content ? (
        <ContentGenerator content={infoPage.content} />
      ) : null}{" "}
      {infoPage.schedule ? (
        <Grid item>
          <ScheduleGenerator schedule={infoPage.schedule} />
        </Grid>
      ) : null}
    </Grid>
  );
}
