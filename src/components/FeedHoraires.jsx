import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import PageName from "../helpers/generators/PageNameGenerator";
import InfoTipGenerator from "../helpers/generators/InfoTipGenerator";
import ContentGenerator from "../helpers/generators/ContentGenerator";
import Title from "../helpers/static/article/Title";
import { Typography } from "@material-ui/core";

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
        <PageName pageName={infoPage.pageName} />
      </Grid>
      {infoPage.infoTip ? (
        <Grid item>
          <InfoTipGenerator infoTip={infoPage.infoTip} />
        </Grid>
      ) : null}
      {infoPage.content ? (
        <Grid>
          <Typography>Carole Richou</Typography>
          <Typography>Carole Richou</Typography>
          <Typography>Carole Richou</Typography>
          <Typography>Carine Da Costa</Typography>
          <Typography>Carole Richou</Typography>
        </Grid>
      ) : null}
    </Grid>
  );
}
