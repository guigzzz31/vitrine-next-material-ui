import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ProTip from "../src/helpers/ProTip";
import CardInfo from "../src/helpers/CardInfo";

import data from "../src/data/data";

import useWindowDimensions from "../src/hooks/useWindowDimensions";

export default function podologie() {
  const { height, width } = useWindowDimensions();
  const infoPage = data.find((category) => category.pageName === "Podologie");

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      top: 12,
      height: height - 160,
    },
    title: {
      paddingTop: theme.spacing(1),
    },
  }));
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
