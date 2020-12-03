import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import ProTip from "../src/helpers/ProTip";
import CardContact from "../src/helpers/static/CardContact";

import data from "../src/data/data";

import useWindowDimensions from "../src/hooks/useWindowDimensions";

export default function contact() {
  const { height, width } = useWindowDimensions();
  const contact = data.find((category) => category.pageName === "Contact");

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
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
        Contact
      </Typography>
      <Container className={classes.container} maxWidth="sm">
        <ProTip info={contact.infoBulle} />
        <CardContact info={contact.info} />
      </Container>
    </>
  );
}
