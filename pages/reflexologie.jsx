import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ProTip from "../src/helpers/ProTip";
import CardInfo from "../src/helpers/CardInfo";

import data from "../src/data/data";

import useStyles from "../styles/container.styles";

export default function reflexologie() {
  const infoPage = data.find(
    (category) => category.pageName === "Réflexologie"
  );
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h4" align="center">
        {infoPage.pageName}
      </Typography>
      <Container className={classes.container} maxWidth="sm">
        {infoPage.infoBulle ? <ProTip info={infoPage.infoBulle} /> : null}
        <Typography variant="body1">
          {infoPage.content.part1.paragraph}
        </Typography>
      </Container>
    </>
  );
}
